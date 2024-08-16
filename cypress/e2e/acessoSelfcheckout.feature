Feature: Teste de acesso ao Selfcheckout

  Scenario: Acesso Selfcheckout 1
    Given que eu tenho os dados de acesso do Selfcheckout
    When eu acesso o Selfcheckout
    Then eu devo conseguir fazer login com sucesso