/// <reference types= "cypress" />

describe('Alterar dispositivos', () => {
    const  dataAtual = new Date().toISOString().slice(0,10)
    const body_cadastro = require('../fixtures/cadastar_device_sucesso.json')
    const body_put = require('../fixtures/update_device_sucesso.json')



    
    it('Editar  um dispositivo', () => {
        cy.request({
            method: 'post',
            url: `/objects`,
            failOnStatusCode: false,
            body: body_cadastro
            }).as('postDeviceResult')
            cy.get('@postDeviceResult').then((response_post) =>{
                expect(response_post.status).equals(200)
                expect(response_post.body.name).equal(body_cadastro.name)
                expect(response_post.body.data.price).equal(800.00)
                expect(response_post.body.data.color).equal("White")


        cy.request({
            method: 'PUT',
            url: `/objects/${response_post.body.id}`,
            failOnStatusCode: false,
            body: body_put
        }).as('putDeviceResult')

    
        cy.get('@putDeviceResult').then((response_put) =>{
          expect(response_put.status).equals(200)
          expect(response_put.body.name).equal(body_put.name)
          expect(response_put.body.updatedAt.slice(0,10)).equal(dataAtual)
          expect(response_put.body.data.price).equal(1500.00)
          expect(response_put.body.data.color).equal('Purple')



        })
})


    })
})
