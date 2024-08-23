export const elements = {
    nextScreen:'[data-cy="next-step-button"]',
    radioBtn:'input[type="radio"]',
    
    // LOGIN SM
    user: ':nth-child(1) > .form-control',
    password: 'body > div.middle-box.text-center.loginscreen.animated.fadeInDown > div > form > div:nth-child(2) > input',
    access: '.btn',

    // LOGIN SC
    containerPassword: '.container-senha input.digito-senha',
    continue: '#login > div > div > div > form > div.buttons > button',

    // ORCAMENTO
    modalWelcome: '#i-understood',
    notPresentModalWelcome: '#welcome-modal > .modal-dialog > .main-header > .container > .header-content > .outer-button > [data-cy="dismiss-modal"]',
    containerProducts:'.bloco-manipulados',
    removeProduct: '[data-cy="remove-formula-button"]',
    cancelRemovalOfBudgetFormula: '',
    containerReasonRemovalProducts:'[data-cy="removal-formula-options-container"]',
    reasonRemovalOfBudgetFormula: '#modal-remocao-formula',
    otherRemovalReasonField:'#outro-motivo',
    confirmProductRemoval: '#remover',
    informSameReasonRemovalAllFormulas: '',
    addProduct:'[data-cy="add-formula-button"]',
    

    // DADOS
    fullName:'[data-cy="full-name"]',
    birthDate:'[data-cy="birth-date"]',
    rg:'[data-cy="rg"]',
    uf:'.select-block',
    phoneNumber:'[data-cy="phone"]',
    cpf:'[data-cy="cpf"]',
    email:'[data-cy="email"]',
    acceptReceiveEssentiaCommunications:'[data-cy="receive-communications"]',
    agreePrivacyPolicy:'[data-cy="agree-privacy-policy"]',

    // ENTREGA
    address:'div.row.enderecos .col-12',
    shippingMethod:'label.forma-envio-container',
    openModalRegisterAddressShipping:'[data-cy="new-address-button"]',
    shippingAddressStreet:'[data-cy="address"]',
    shippingAddressCity:'[data-cy="city"]',
    shippingAddressState:'[data-cy="state"]',
    shippingAddressDistrict:'[data-cy="district"]',
    shippingAddressHomeNumber:'[data-cy="number"]',
    shippingAddressComplement:'[data-cy="complement"]',
    shippingAddresspostalCode:'[data-cy="cep"]',
    openExternalpostalCodeSearch:'[data-cy="search-zip-code"]',
    saveNewShippingAddress:'[data-cy="submit-button"]',
    cancelShippingAddressRegistration:'[data-cy="dismiss-modal"]',
    closeModalShippingAddressRegistration:'[data-cy="close-modal"]',

    // RESUMO E FORMA DE PAGAMENTO
    showBudgetDetails:'[data-cy="expand-formula"]',
    paymentMethod: 'div.container-forma-pagamento',
   


}
