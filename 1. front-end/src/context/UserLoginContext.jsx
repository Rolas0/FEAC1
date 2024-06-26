import { useLocalStorage } from 'usehooks-ts';
import { createContext } from 'react';

export const CreateUserLoginContext = createContext({
    user: null,
});

function UserLoginProvider({ children }) {
    const [user, setUser] = useLocalStorage('user', null);

    function login(userData) {
        setUser(userData);
    }

    return (
        <CreateUserLoginContext.Provider value={{ user, login }}>
            {children}
        </CreateUserLoginContext.Provider>
    );
}
export default UserLoginProvider;
