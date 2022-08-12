import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import { GetAverageSessions } from '../../../services/http';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

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

    return (
        <section className="average-sessions">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.formattedSessions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dayLetter" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    );
};

export default AverageSessions;
