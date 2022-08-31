import './index.css';

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

export default KeyData;
