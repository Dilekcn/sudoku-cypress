/// <reference types="Cypress" />
describe('Timer', () => {
    it('show 10 sec',() => {
      cy.visit('/')
      cy.contains('.status__time','00:10', {timeout: 11_000})

      })
  })