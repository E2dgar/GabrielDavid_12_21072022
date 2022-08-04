import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(12);

    useEffect(() => {
        setUser(parseInt(window.location.pathname.split('/').pop()));
    }, []);

    return <UserContext.Provider user={user}>{children}</UserContext.Provider>;
};
