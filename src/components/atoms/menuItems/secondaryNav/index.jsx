import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for a menu item in secondary Nav
 */
const ItemSecondaryNav = ({ href, picto }) => {
    return (
        <li className="secondary-nav-menu-item">
            <a href={href}>{picto}</a>
        </li>
    );
};

ItemSecondaryNav.propsType = {
    /**
     * ItemSecondaryNav's picto
     */
    picto: PropTypes.element.isRequired,
    /**
     * ItemSecondaryNav's href
     */
    href: PropTypes.string.isRequired
};

export default ItemSecondaryNav;
