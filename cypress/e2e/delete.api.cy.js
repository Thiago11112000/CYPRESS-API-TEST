/// <reference types= "cypress" />

describe('Deletar dispositivos', () => {

    it('Deletar  um dispositivo', () => {
        const body = {
            "name": "Samsung Galaxy GO",
            "data": {
                "price": 800.00,
                "color": "White"
            }
        }
       cy.cadastrarDevice(body).then((response) =>{
                expect(response.status).equals(200)
   
        cy.request({
            method: 'Delete',
            url: `/objects/${response.body.id}`,
        }).as('deletDeviceResult')
    
        cy.get('@deletDeviceResult').then((response_del) =>{
          expect(response_del.status).equals(200)
          expect(response_del.body.message).equals(`Object with id = ${response.body.id} has been deleted.`)
        })
})


    })
    it('Deletar  um dispositivo não existente', () => {

        const  id_inexistente = 'thiago'
        cy.request({
            method: 'Delete',
            failOnStatusCode:false,
            url: `/objects/${id_inexistente}`,
        }).as('deletDeviceResult')
    

        cy.get('@deletDeviceResult').then((response_del) =>{
          expect(response_del.status).equals(404)
          expect(response_del.body.error).equals(`Object with id = ${id_inexistente} doesn't exist.`)
    
    })
})
})
