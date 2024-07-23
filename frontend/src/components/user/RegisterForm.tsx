import styles from './Form.module.scss';
import { ROUTES } from '@/router/routes';
import { Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { FormikField } from '../common/FormInput';
import { registerInitialValues, registerValidationSchema } from './yupConsts';
import { RegisterRequest } from './types';
import { useRegisterUser } from './hooks';
import { ErrorResponse } from '@/config/axios';
import { useNavigate, Link } from 'react-router-dom';

export const RegisterForm = () => {
    const { mutateAsync: registerUser } = useRegisterUser();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleSubmit = async (formValues: RegisterRequest) => {
        try {
            await registerUser(formValues);
            navigate(ROUTES.LOGIN);
            enqueueSnackbar('Registration successful', {
                variant: 'success',
            });
        } catch (error) {
            const errorMessage = error as ErrorResponse;
            console.log(errorMessage);
            enqueueSnackbar(errorMessage?.response?.data.message ?? '', {
                variant: 'error',
            });
        }
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={registerInitialValues}
                validationSchema={registerValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={styles.form}>
                    <h2 className={styles.title}>Register</h2>
                    <div className={styles.field}>
                        <FormikField name="name" placeholder="name" />
                    </div>
                    <div className={styles.field}>
                        <FormikField
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className={styles.field}>
                        <FormikField
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <button className={styles.button} type="submit">
                        Register
                    </button>
                    <div className={styles.link}>
                        <Link to={ROUTES.LOGIN} className={styles.singUp}>
                            Already have an account? Log in
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
