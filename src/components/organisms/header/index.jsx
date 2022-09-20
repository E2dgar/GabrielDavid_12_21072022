import Logo from '../../atoms/logo';
import MainNav from '../../molecules/navs/navMain';

import './index.css';

const Header = () => {
    return (
        <header>
            <div>
                <Logo />
            </div>

            <MainNav />
        </header>
    );
};

export default Header;
