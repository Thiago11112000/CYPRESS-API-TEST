/// <reference types= "cypress" />

describe('Cadastrar dispositivos', () => {
    const  dataAtual = new Date().toISOString().slice(0,10)
    const body = {
        "name": "Samsung Galaxy GO",
        "data": {
            "price": 800.00,
            "color": "White"
        }
    }

    
    it('Cadastrar um dispositivo', () => {
        cy.request({
            method: 'post',
            url: `https://api.restful-api.dev/objects`,
            failOnStatusCode: false,
            body: body
            }).as('postDeviceResult')
 
            cy.get('@postDeviceResult').then((response) =>{
             expect(response.status).equals(200)
             expect(response.body.id).not.empty
             expect(response.body.createdAt).not.empty
             expect(response.body.createdAt.slice(0,10)).equal(dataAtual)
             expect(response.body.name).equal("Samsung Galaxy GO")

            })
    });
    it.only('Cadastrar um dispositivo sem mandar dados', () => {
        cy.request({
            method: 'post',
            url: `https://api.restful-api.dev/objects`,
            failOnStatusCode: false,
            body: ''
            }).as('postDeviceResult')
 
            cy.get('@postDeviceResult').then((response) =>{
             expect(response.status).equals(400)
             expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')

            })
    });
});