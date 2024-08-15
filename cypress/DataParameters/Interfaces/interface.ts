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