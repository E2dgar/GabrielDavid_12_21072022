import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing a loading message
 * @component
 *
 * @param {string} message The loading message to display
 *
 * @returns {JSX.Element} Loader component.
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
