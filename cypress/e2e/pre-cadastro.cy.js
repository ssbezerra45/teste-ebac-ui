/// <reference types="cypress" />
describe('Funcionalidade Pré cadastro', () => {        

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });
    it('Deve completar o pré-cadastro com sucesso', () => {
        cy.get('[name="email"]').type("aluno_ebac99@teste.com")
        cy.get('.register > :nth-child(2) > [name="password"]').type("!teste1234@teste.com")
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type("sergio")
        cy.get('#account_last_name').type("bezerra")
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});
