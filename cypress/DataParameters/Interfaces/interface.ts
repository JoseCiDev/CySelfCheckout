
import {
    Uf,
    ShippingMethod,
    PaymentMethod,
    ReasonProductRemoval,
} from '../../import';

export interface CheckAndThrowError<S = string> {
    condition: boolean;
    errorMessage: S;
}

export interface ValidationConfig {
    selector: string;
    condition: (val: any) => boolean;
    validationMessage: string;
    successMessage: string;
    failureMessage: string;
}

export interface DataParameters {
    fixtures: any;
    url: {
        completeStepCustomerData: string;
        addressStep: string;
        budgetSummaryStep: string;
    };
    address: {
        postalCode: string;
        street: string;
        streetNumber: number;
        city: string;
        state: string;
        district: string[];
        complements: string[];
    };
    user: {
        fullName: string;
        birthDate: Date;
        formattedBirthDate: string;
        rg: string;
        cpf: string;
        phoneNumber: string;
        email: string;
    };
    ufsArray: string[];
    randomOptionUf: string;
    paymentMethod: string;

    budgetParams: {
        item: string | undefined;
        removalReason: ReasonProductRemoval;
        textReasonForRemovalOther: string | undefined;
        amountRegisteredAddresses: number;
        selectedAddress: number;
        shippingMethod: ShippingMethod;
        addProduct: boolean;
    };

    enums: {
        reasonProductRemoval: typeof ReasonProductRemoval;
        paymentMethod: typeof PaymentMethod;
        shippingMethod: typeof ShippingMethod;
        Uf: typeof Uf;
    };

    paymentMethodOptions: string[];
}