import { useLocalStorage } from 'usehooks-ts';
import { createContext, PropsWithChildren } from 'react';
import { LoginResponse, User } from '../components/user/types';

const CreateUserLoginContext = createContext<{
    user: User | null;
    isLoggedIn: boolean;
    login: (user: LoginResponse) => void;
    logout: () => void;
}>({
    user: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

const UserLoginProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useLocalStorage<User | null>('user', null);
    const [, setToken] = useLocalStorage<string | null>('token', null);

    const isLoggedIn = !!user;

    const login = (loginResponse: LoginResponse) => {
        console.log(loginResponse);
        setUser(loginResponse.user);
        setToken(loginResponse.token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <CreateUserLoginContext.Provider
            value={{ user, isLoggedIn, login, logout }}
        >
            {children}
        </CreateUserLoginContext.Provider>
    );
};

export { UserLoginProvider, CreateUserLoginContext };
