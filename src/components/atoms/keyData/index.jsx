const KeyData = ({ label, count, picto }) => {
    return (
        <>
            <img src={`assets/keyData/${picto}`} alt={label} />
            <p>{label}</p>
            <p>{count}</p>
        </>
    );
};

export default KeyData;
