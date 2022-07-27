import { API_PATH } from '../../../constants';
import { useFetch } from '../../../services/http';
import Logo from '../../atoms/logo';
import MainNav from '../../menus/navMain';

import './index.css';

const Header = () => {
    const { data, isLoading, error } = useFetch(API_PATH.USER);

    console.log(data);
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
