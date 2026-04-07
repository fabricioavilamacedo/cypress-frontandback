Feature: Central de Atendimento ao Cliente TAT
    Como um usuário do sistema
    Quero enviar um feedback através do formulário
    Para que eu possa receber atendimento especializado

    Background: 
        Given que acesso a página do formulário CAC TAT

    @web @sucesso
    Scenario: Enviar formulário com sucesso preenchendo todos os campos
        When preencho os dados obrigatórios:
            | nome | sobrenome | email          | feedback           |
            | QA   | Sênior    | qa@test.com.br | Teste de automação |
        And anexo um arquivo de teste
        And submeto o formulário
        Then visualizo a mensagem de sucesso "Mensagem enviada com sucesso."

    @web @erro
    Scenario: Validar erro ao submeter com email inválido
        When preencho o campo email com "email_invalido"
        And submeto o formulário
        Then visualizo a mensagem de erro "Valide os campos obrigatórios!"

    @web @regra_negocio
    Scenario: Campo telefone continua vazio ao digitar caracteres não numéricos
        When digito "abc!@#" no campo de telefone
        Then o campo de telefone deve estar vazio