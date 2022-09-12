import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import { GetAverageSessions } from '../../../services/http';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
    console.log('date sessions', data.formattedSessions);

    return (
        <section className="average-sessions">
            <h2> Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data.formattedSessions}
                    margin={{ top: 77, left: 0, bottom: 16, right: 0 }}>
                    <XAxis
                        dataKey="dayLegend"
                        axisLine={false}
                        tickLine={false}
                        padding={{ left: 10, right: 10 }}
                    />

                    <Tooltip
                        contentStyle={{ background: 'white' }}
                        labelStyle={{ display: 'none' }}
                        itemStyle={{
                            color: 'black',
                            fontWeight: 'bold'
                        }}
                        cursor={false}
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
                    />
                </LineChart>
            </ResponsiveContainer>
        </section>
    );
};

export default AverageSessions;
