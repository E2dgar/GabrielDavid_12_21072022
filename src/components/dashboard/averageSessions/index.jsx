import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import { GetAverageSessions } from '../../../services/http';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';

const AverageSessions = () => {
    const { data, isLoading, error } = useFetchByFn(GetAverageSessions);

    if (isLoading) {
        return <Loader message={' Your average sessions '} />;
    }
    if (error) {
        return (
            <Error
                message={' average sessions '}
                className="average-sessions-error"
            />
        );
    }
    console.log('averageSessions', data);

    return <section className="hello">average sessions</section>;
};

export default AverageSessions;
