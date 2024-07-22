import * as Yup from 'yup';
import { errorMessage } from '@/consts/errorMessage';
import { LoginRequest, RegisterRequest } from './types';

export const loginValidationSchema: Yup.Schema<LoginRequest> =
    Yup.object().shape({
        email: Yup.string()
            .email(errorMessage.email)
            .required(errorMessage.required),
        password: Yup.string().required(errorMessage.required),
    });

export const registerValidationSchema: Yup.Schema<RegisterRequest> =
    Yup.object().shape({
        name: Yup.string().required(errorMessage.required),
        email: Yup.string()
            .email(errorMessage.email)
            .required(errorMessage.required),
        password: Yup.string().required(errorMessage.required),
    });

export const loginInitialValues: LoginRequest = {
    email: '',
    password: '',
};
export const registerInitialValues: RegisterRequest = {
    name: '',
    email: '',
    password: '',
};
