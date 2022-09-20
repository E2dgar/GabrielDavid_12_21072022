import './index.css';
import zen from '../../../../assets/pictos/secondary-nav/zen.png';
import swim from '../../../../assets/pictos/secondary-nav/swim.png';
import bike from '../../../../assets/pictos/secondary-nav/bike.png';
import strength from '../../../../assets/pictos/secondary-nav/strength.png';
import ItemSecondaryNav from './../../../atoms/menuItems/secondaryNav';

/**
 * Component for the secondary Nav
 */
const SecondaryNav = () => {
    return (
        <nav className="secondary-nav">
            <ul>
                <ItemSecondaryNav
                    href="#"
                    picto={<img src={zen} alt="Relaxation" />}
                />
                <ItemSecondaryNav
                    href="#"
                    picto={<img src={swim} alt="Natation" />}
                />
                <ItemSecondaryNav
                    href="#"
                    picto={<img src={bike} alt="Vélo" />}
                />
                <ItemSecondaryNav
                    href="#"
                    picto={<img src={strength} alt="Musculation" />}
                />
            </ul>
        </nav>
    );
};

export default SecondaryNav;
