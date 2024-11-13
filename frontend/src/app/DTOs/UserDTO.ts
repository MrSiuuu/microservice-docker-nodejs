export interface UserSignupDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserSigninDTO {
    email: string;
    password: string;
}