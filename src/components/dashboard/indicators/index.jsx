import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import { GetIndicators } from '../../../services/http';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';
import KeyData from '../../atoms/keyData';

/**
 * Component for showing key indicators .
 *
 * @return {JSX.Element}
 */
const Indicators = () => {
    const { data, isLoading, error } = useFetchByFn(GetIndicators);

    if (isLoading) {
        return <Loader message={' Your indicators '} />;
    }
    if (error) {
        return <Error message={' indicators '} className="indicators-error" />;
    }

    return (
        <section className="indicators">
            {data.formattedIndicators.map((indicator) => (
                <KeyData
                    key={indicator.label}
                    label={indicator.label}
                    count={indicator.count}
                    picto={indicator.picto}
                />
            ))}
        </section>
    );
};

export default Indicators;
