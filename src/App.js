import SecondaryNav from './components/menus/navSecondary';
import Dashboard from './components/layouts/dashboard';
import Footer from './components/molecules/footer';
import Header from './components/molecules/header';
import { useEffect, useState } from 'react';

const App = () => {
    const idFromUrl = window.location.pathname.split('/').pop();
    const [id, setId] = useState(18);

    useEffect(() => {
        setId(idFromUrl);
        localStorage.setItem('userId', JSON.stringify(id));
    }, [idFromUrl, id]);

    return (
        <>
            <Header />
            <SecondaryNav />
            <Dashboard />
            <Footer />
        </>
    );
};

export default App;
