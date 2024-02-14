/// <reference types= "cypress" />


describe('Buscar dispositivos', () => {
    it('Buscar um dispositivo específico', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/5',
            failOnStatusCode: false
        })
    });
});