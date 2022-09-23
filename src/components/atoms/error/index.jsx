import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing a error message
 * @component
 *
 * @param {string} message The error message to display
 * @param {string} className The className for the p element
 *
 * @returns {JSX.Element} Error component.
 */
const Error = ({ message, className }) => {
    return (
        <p className={className}>
            Sorry, an error occured in your {message} board. Please retry later.
        </p>
    );
};

Error.propTypes = {
    /**
     * Error message
     */
    message: PropTypes.string.isRequired,
    /**
     * Error className
     */
    className: PropTypes.string.isRequired
};

export default Error;
