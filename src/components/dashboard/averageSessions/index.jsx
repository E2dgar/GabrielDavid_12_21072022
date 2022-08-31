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
    console.log('date sessions', data.formattedSessions);

    return (
        <section className="average-sessions">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.formattedSessions}>
                    {/*<CartesianGrid strokeDasharray="3 3" />*/}
                    <XAxis
                        dataKey="dayLegend"
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Area
                        className="area"
                        type="monotone"
                        dataKey="sessionLength"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    );
};

export default AverageSessions;
