import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import { GetAverageSessions } from '../../../services/http';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    YAxis
} from 'recharts';
import CustomCursor from './customCursor';

/**
 *  Component for showing AverageSessions Chart
 */
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

    const toolTipFormatter = (value) => {
        return [value + ' min'];
    };

    return (
        <section className="average-sessions">
            <h2> Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data.formattedSessions}
                    margin={{ top: 0, left: 0, bottom: 16, right: 0 }}>
                    <XAxis
                        dataKey="dayLegend"
                        axisLine={false}
                        tickLine={false}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis padding={{ top: 70 }} hide />

                    <Tooltip
                        wrapperStyle={{
                            background: 'var(--color-white)',
                            color: '#000',
                            outline: 'none',
                            border: 'none'
                        }}
                        labelStyle={{
                            display: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                        cursor={<CustomCursor />}
                        formatter={toolTipFormatter}
                    />
                    <Line
                        dataKey="sessionLength"
                        legendType="none"
                        type="natural"
                        activeDot={{
                            stroke: 'rgba(255, 255, 255, .3)',
                            fill: 'rgb(255, 255, 255)',
                            strokeWidth: 10,
                            r: 5
                        }}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </section>
    );
};

export default AverageSessions;
