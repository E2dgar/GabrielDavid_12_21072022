import PropTypes from 'prop-types';
import "./index.css";


/**
 * Component for a menu item in secondary Nav
 * @component
 */
const ItemSecondaryNav = ({href, picto}) => {
  return (
    <li className='secondary-nav-menu-item'>
      <a href={href}>
        {picto}
      </a>
    </li>
  )
}

ItemSecondaryNav.propsType = {
  picto: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired
}

export default ItemSecondaryNav