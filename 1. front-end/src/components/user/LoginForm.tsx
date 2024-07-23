import { ErrorResponse } from '@/config/axios';
import { useLoginUser } from './hooks';
import styles from './Form.module.scss';
import { FormikField } from '../common/FormInput';
import { LoginRequest } from './types';
import { loginInitialValues, loginValidationSchema } from './yupConsts';
import { CreateUserLoginContext } from '@/context/UserLoginContext';
import { ROUTES } from '@/router/routes';
import { Form, Formik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { useContext, useState } from 'react';

const LoginForm = () => {
    const { login } = useContext(CreateUserLoginContext);
    const [error, setError] = useState('');
    const { mutateAsync: loginUser } = useLoginUser();
    const navigate = useNavigate();

    const handleSubmit = async (formValues: LoginRequest) => {
        try {
            const response = await loginUser(formValues);
            login(response);
            navigate(ROUTES.HOME);
        } catch (error) {
            const errorMessage = error as ErrorResponse;
            setError(errorMessage.response?.data.message ?? '');
        }
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={styles.form}>
                    <h2 className={styles.title}>Login</h2>
                    {error && <div className={styles.error}>{error}</div>}
                    <div className={styles.field}>
                        <FormikField
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                    </div>
                    <div className={styles.field}>
                        <FormikField
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button className={styles.button} type="submit">
                        Log in
                    </button>
                    <div className={styles.link}>
                        <Link to={ROUTES.REGISTER} className={styles.singUp}>
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
export default LoginForm;
