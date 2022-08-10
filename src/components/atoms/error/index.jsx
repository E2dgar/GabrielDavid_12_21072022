import './index.css';

const Error = ({ message, className }) => {
    return (
        <p className={className}>
            Sorry, an error occured in your {message} board. Please retry later.
        </p>
    );
};

export default Error;
