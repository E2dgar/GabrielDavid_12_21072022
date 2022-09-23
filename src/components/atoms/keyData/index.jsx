import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing a keyData.
 * Displays the label and the value of a keyData and his picto
 * @component
 *
 * @param {label} string  Label of keyData
 * @param {count} string  Value of keyData
 * @param {picto} string  Name of img for src construction
 *
 * @returns {JSX.Element} KeyData component.
 */
const KeyData = ({ label, count, picto }) => {
    return (
        <div className="key-data">
            <img
                src={`${process.env.PUBLIC_URL}/assets/keyData/${picto}`}
                alt={label}
            />
            <div className="details">
                <p className="value">{count}</p>
                <p className="label">{label}</p>
            </div>
        </div>
    );
};

KeyData.propTypes = {
    /**
     * KeyData 's label
     */
    label: PropTypes.string.isRequired,
    /**
     * KeyData's count
     */
    count: PropTypes.string.isRequired,
    /**
     * KeyData's picto
     */
    picto: PropTypes.string.isRequired
};

export default KeyData;
