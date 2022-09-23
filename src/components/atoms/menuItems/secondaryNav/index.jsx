import PropTypes from 'prop-types';
import './index.css';

/**
 * Component for showing a item for the secondary nav
 * @component
 *
 * @param {string} href The href for the link
 * @param {element} picto Img tag
 *
 * @returns {JSX.Element} secondary nav item.
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
