/// <reference types= "cypress" />

describe('Cadastrar dispositivos', () => {
    const  dataAtual = new Date().toISOString().slice(0,10)
    const body = require('../fixtures/cadastar_device_sucesso.json')
    
   
    
    it('Cadastrar um dispositivo', () => {
       
        cy.cadastrarDevice(body).then((response) =>{
             expect(response.status).equals(200)
             expect(response.body.id).not.empty
             expect(response.body.createdAt).not.empty
             expect(response.body.createdAt.slice(0,10)).equal(dataAtual)
             expect(response.body.name).equal("Samsung Galaxy GO")

            })
    });
    it('Cadastrar um dispositivo sem mandar dados', () => {
     cy.cadastrarDevice().then((response) =>{
             expect(response.status).equals(400)
             expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')

            })
    })
})
