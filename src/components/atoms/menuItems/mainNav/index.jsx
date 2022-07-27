import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for a menu item in main Nav
 * @component
 */
const ItemMainNav = ({ textContent, href }) => {
    return (
        <li className="main-nav-menu-item">
            <a href={href}>{textContent}</a>
        </li>
    );
};

ItemMainNav.propsType = {
    textContent: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default ItemMainNav;
