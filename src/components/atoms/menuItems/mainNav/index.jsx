import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing a item for the main nav
 * @component
 *
 * @param {string} textContent Label of item
 * @param {string} href The href for the link
 *
 * @returns {JSX.Element} Main nav item.
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
