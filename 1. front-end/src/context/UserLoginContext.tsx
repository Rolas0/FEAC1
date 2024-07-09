import { useLocalStorage } from 'usehooks-ts';
import { createContext, PropsWithChildren } from 'react';

interface userDataProps {
    email: string;
    password: string;
}

const CreateUserLoginContext = createContext<{
    user: userDataProps | null;
    isLoggedIn: boolean;
    login: (user: userDataProps) => void;
    logout: () => void;
}>({
    user: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

const UserLoginProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useLocalStorage<userDataProps | null>('user', null);

    console.log(user);

    const login = (userData: userDataProps) => {
        setUser(userData);
    };
    const isLoggedIn = !!user;
    const logout = () => setUser(null);

    return (
        <CreateUserLoginContext.Provider
            value={{ user, isLoggedIn, login, logout }}
        >
            {children}
        </CreateUserLoginContext.Provider>
    );
};

export { UserLoginProvider, CreateUserLoginContext };
