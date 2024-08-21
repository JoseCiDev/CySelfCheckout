///home/jose/projetos/CySelfCheckout/cypress/import.tsimport * as loadash from 'lodash';


//npm install typescript --save-dev

// import * as lodash from 'lodash';
// export { lodash };
//npm i -g npm
//npm i --save lodash

// import * as dateFns from 'date-fns';
// export { dateFns };
// export { format } from 'date-fns';
//npm install date-fns --save

// export { faker } from '@faker-js/faker';
//npm install @faker-js/faker --save-dev


// import { fakerBr } from '@js-brasil/fakerbr';
// export { fakerBr };
//npm i @js-brasil/fakerbr

// export { mount } from 'cypress/react';

// import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// export { addCucumberPreprocessorPlugin };
//npm install @badeball/cypress-cucumber-preprocessor
//npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild

// import webpack from "@cypress/webpack-preprocessor";
// export { webpack };

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
export { Given, When, Then };

export { elements } from './elements';

export {
    DataParameters,
    CheckAndThrowError,
} from './DataParameters/Interfaces/interface';

export {
    ValidationResult,
    ElementTypeAndValueOpcional,
} from './DataParameters/Types/types';

import {
    dataParameters,
} from './DataParameters/dataParameters';
// export {
//     validateEmail,
//     validatePassword,
//     checkInput,
// } from './utils';

// export { Messages } from './messages';