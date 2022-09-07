import './index.css';
import PropTypes from 'prop-types';

/**
 * Commponent for showing error message
 *
 * @component
 * @example
 * const message = "activity chart"
 * const className = "activity-error"
 * return (
 *  <Error className={className} message={message} />
 * )
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
