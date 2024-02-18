/// <reference types= "cypress" />


describe('Buscar dispositivos', () => {
    it('Buscar um dispositivo específico', () => {
        const device_id = '5'
    cy.buscarDeviceEspecifico(device_id)
            .then((response)=>{
               expect(response.status).equal(200)
               expect(response.body.id).equal(device_id)
               expect(response.body.name).equal('Samsung Galaxy Z Fold2')
               expect(response.body).not.empty
               expect(response.body.data).not.empty
               expect(response.body.data.price).not.string   
               expect(response.body.data.price).equal(689.99)
               expect(response.body.data.color).not.empty
               expect(response.body.data.color).equal('Brown')

               console.log(response)
        })
    })
    it('Buscar um dispositivo inexiste', () => {
        const device_id = 'xpto'
    cy.buscarDeviceEspecifico(device_id)
            .then((response)=>{
               expect(response.status).equal(404)
               expect(response.body.error).equal(`Oject with id=${device_id} was not found.`)
               console.log(response)
        })
    })
})
