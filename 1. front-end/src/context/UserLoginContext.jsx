import { useLocalStorage } from 'usehooks-ts';
import { createContext } from 'react';

export const CreateUserLoginContext = createContext(null);

const UserLoginProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);

    console.log(user);

    const login = (userData) => {
        setUser(userData);
    };
    const logout = () => setUser(null);

    return (
        <CreateUserLoginContext.Provider value={{ user, login, logout }}>
            {children}
        </CreateUserLoginContext.Provider>
    );
};

export default UserLoginProvider;
