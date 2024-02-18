/// <reference types= "cypress" />

Cypress.Commands.add('buscarDeviceEspecifico', (device_id) => { 
    cy.request({
        method: 'GET',
        url: `https://api.restful-api.dev/objects/${device_id}`,
        failOnStatusCode: false
    }).then((response)=>{ return response })
})

Cypress.Commands.add('cadastrarDevice', (payload) => { 
    cy.request({
        method: 'post',
        url: `/objects`,
        failOnStatusCode: false,
        body: payload
    }).then((response)=>{ return response })
})
