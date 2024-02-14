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
});