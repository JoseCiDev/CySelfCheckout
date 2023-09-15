export const ELEMENTS = {
    avancarProximaTela:'[data-cy="next-step-button"]',
    radiobutton:'input[type="radio"]',
    
    // LOGIN SM
    usuario: ':nth-child(1) > .form-control',
    senha: 'body > div.middle-box.text-center.loginscreen.animated.fadeInDown > div > form > div:nth-child(2) > input',
    entrar: '.btn',

    // LOGIN SC
    containerSenha: '.container-senha input.digito-senha',
    continuar: '#login > div > div > div > form > div.buttons > button',

    // ORCAMENTO
    modalSejaBemVindo: '#i-understood',
    naoApresentarModalSejaBemVindo: '#welcome-modal > .modal-dialog > .main-header > .container > .header-content > .outer-button > [data-cy="dismiss-modal"]',
    blocoProdutos:'.bloco-manipulados',
    removerProduto: '[data-cy="remove-formula-button"]',
    cancelarRemocaoFormulaOrcamento: '',
    blocoMotivoRemocaoProdutos:'[data-cy="removal-formula-options-container"]',
    motivoRemocaoFormulaOrcamento: '#modal-remocao-formula',
    campoTextoMotivoRemocaoOutro:'#outro-motivo',
    confirmarRemocaoProduto: '#remover',
    informarMesmoMotivoRemocaoTodasFormulas: '',
    adicionarProduto:'[data-cy="add-formula-button"]',
    

    // DADOS
    nomeCompleto:'[data-cy="full-name"]',
    dataNascimento:'[data-cy="birth-date"]',
    rg:'[data-cy="rg"]',
    uf:'.select-block',
    telefone:'[data-cy="phone"]',
    cpf:'[data-cy="cpf"]',
    email:'[data-cy="email"]',
    aceitoReceberComunicacoesEssentia:'[data-cy="receive-communications"]',
    aoAssinarConcordaPoliticaPrivacidade:'[data-cy="agree-privacy-policy"]',

    // ENTREGA
    endereços:'div.row.enderecos .col-12',
    formaEnvio:'label.forma-envio-container',
    abrirModalCadastrarEnderecoEnvio:'[data-cy="new-address-button"]',
    ruaEnderecoEntrega:'[data-cy="address"]',
    cidadeEnderecoEntrega:'[data-cy="city"]',
    estadoEnderecoEntrega:'[data-cy="state"]',
    bairroEnderecoEntrega:'[data-cy="district"]',
    numeroEnderecoEntrega:'[data-cy="number"]',
    complementoEnderecoEntrega:'[data-cy="complement"]',
    cepEnderecoEntrega:'[data-cy="cep"]',
    abrirBuscaCepExterno:'[data-cy="search-zip-code"]',
    salvarNovoEnderecoEntrega:'[data-cy="submit-button"]',
    cancelarCadastroEnderecoEntrega:'[data-cy="dismiss-modal"]',
    fecharModalCadastroEnderecoEntrega:'[data-cy="close-modal"]',

    // RESUMO E FORMA DE PAGAMENTO
    expandirDetalhesOrcamento:'[data-cy="expand-formula"]',
    formaPagamento: 'div.container-forma-pagamento',
   


}
