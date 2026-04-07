import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// Ajustando os pontos (..) para chegar na pasta correta
import CacTatPage from "../pages/cac-tatPage"; 
import { ELEMENTS } from "../../support/elements/elements";

Given("que acesso a página do formulário CAC TAT", () => {
    CacTatPage.acessar();
});

When("preencho os dados obrigatórios:", (tabela) => {
    CacTatPage.preencherDados(tabela.hashes()[0]);
});

When("anexo um arquivo de teste", () => {
    CacTatPage.anexarArquivo();
});

When("submeto o formulário", () => {
    CacTatPage.clicarEnviar();
});

When("preencho o campo email com {string}", (email) => {
    cy.get(ELEMENTS.email).type(email);
});

When("digito {string} no campo de telefone", (texto) => {
    cy.get(ELEMENTS.phone)
        .type(texto)
        .should('have.value', '');
});

Then("visualizo a mensagem de sucesso {string}", (msg) => {
    cy.get(ELEMENTS.successMsg).should('be.visible').and('contain', msg);
});

Then("visualizo a mensagem de erro {string}", (msg) => {
    cy.get(ELEMENTS.errorMsg).should('be.visible').and('contain', msg);
});

Then("o campo de telefone deve estar vazio", () => {
    cy.get(ELEMENTS.phone).should('have.value', '');
});