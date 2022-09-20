import SecondaryNav from './components/molecules/navs/navSecondary';
import Dashboard from './components/layouts/dashboard';
import Footer from './components/organisms/footer';
import Header from './components/organisms/header';

const App = () => {
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
