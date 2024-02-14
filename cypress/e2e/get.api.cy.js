/// <reference types= "cypress" />


describe('Buscar dispositivos', () => {
    it('Buscar um dispositivo específico', () => {
        const device_id  = '5'
        cy.request({
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${device_id}`,
            failOnStatusCode: false
        }).as('getDeviceResult')


        cy.get('@getDeviceResult')
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
    });
});