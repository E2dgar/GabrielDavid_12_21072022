import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing Loader
 */
const Loader = ({ message }) => {
    return <p>{message} board is loading. Please wait.</p>;
};

Loader.propTypes = {
    /**
     * Loader 's message
     */
    message: PropTypes.string.isRequired
};

export default Loader;
