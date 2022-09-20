import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for a menu item in main Nav
 */
const ItemMainNav = ({ textContent, href }) => {
    return (
        <li className="main-nav-menu-item">
            <a href={href}>{textContent}</a>
        </li>
    );
};

ItemMainNav.propsType = {
    /**
     * ItemMainNav's textContent
     */
    textContent: PropTypes.string.isRequired,
    /**
     * ItemMainNav's href
     */
    href: PropTypes.string.isRequired
};

export default ItemMainNav;
