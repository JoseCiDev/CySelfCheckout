///home/jose/projetos/CySelfCheckout/cypress/import.tsimport * as loadash from 'lodash';

import { defineConfig } from "cypress";

import { ReasonProductRemoval } from './DataParameters/Enums/reasonProductRemoval'
import { PaymentMethod } from './DataParameters/Enums/paymentMethod'
import { ShippingMethod } from './DataParameters/Enums/shippingMethod'
import { Uf } from './DataParameters/Enums/uf'

//npm install typescript --save-dev

import * as lodash from 'lodash';
//npm i -g npm
//npm i --save lodash

import * as dateFns from 'date-fns';
import { format } from 'date-fns';
//npm install date-fns --save

import { faker } from '@faker-js/faker';
//npm install @faker-js/faker --save-dev


import { fakerBr } from '@js-brasil/fakerbr';
//npm i @js-brasil/fakerbr

import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
//npm install @badeball/cypress-cucumber-preprocessor

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
//npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { elements } from './elements';

import {
    DataParameters,
    CheckAndThrowError,
    ValidationConfig,
} from './DataParameters/Interfaces/interface';

import {
    ValidationResult,
    ElementTypeAndValueOpcional,
    ConditionalWrite,
} from './DataParameters/Types/types';

import {
    dataParameters,
} from './DataParameters/dataParameters';

// import {
//     validateEmail,
//     validatePassword,
//     checkInput,
// } from './utils';

// import { Messages } from './messages';


export {
    defineConfig,
    createBundler,
    createEsbuildPlugin,
    lodash,
    dateFns,
    format,
    faker,
    fakerBr,
    addCucumberPreprocessorPlugin,
    Given, When, Then,
    elements,
    DataParameters,
    dataParameters,
    CheckAndThrowError,
    ValidationResult,
    ElementTypeAndValueOpcional,
    ValidationConfig,
    ConditionalWrite,
    Uf,
    ShippingMethod,
    PaymentMethod,
    ReasonProductRemoval,
};