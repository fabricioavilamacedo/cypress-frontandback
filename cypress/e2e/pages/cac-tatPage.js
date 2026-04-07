// cypress/e2e/pages/cac-tat.js
import { ELEMENTS } from '../../support/elements/elements'

class CacTatPage {
    acessar() {
        cy.visit(Cypress.env('baseUrlCacTat'));
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    }

    preencherDados(dados) {
        cy.get(ELEMENTS.firstName).should('be.visible').type(dados.nome);
        cy.get(ELEMENTS.lastName).should('be.visible').type(dados.sobrenome);
        cy.get(ELEMENTS.email).should('be.visible').type(dados.email);
        
        // Agora com o seletor assertivo #open-text-area
        cy.get(ELEMENTS.openText)
            .should('be.visible')
            .type(dados.feedback, { delay: 0 });
    }

    anexarArquivo() {
        cy.get(ELEMENTS.fileUpload).selectFile('cypress/fixtures/example.json');
    }

    clicarEnviar() {
        cy.get(ELEMENTS.submitBtn).click();
    }
}

export default new CacTatPage();