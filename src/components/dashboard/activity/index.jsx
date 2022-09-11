import { GetActivity } from '../../../services/http';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Text
} from 'recharts';
import CustomLegendChart from '../../atoms/customLegend';
import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';

/**
 *  Component for showing ACtivity Chart
 */
const Activity = () => {
    const { data, isLoading, error } = useFetchByFn(GetActivity);

    if (isLoading) {
        return <Loader message={' Your activity '} />;
    }
    if (error) {
        return <Error message={' activity '} className="activity-error" />;
    }

    console.log('dataformatttttted', data.formattedSessions[0]);
    return (
        <section className="activity">
            {/*<h2>Activité quotidienne</h2>*/}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={10}
                    data={data.formattedSessions}
                    barCategoryGap={7}
                    barGap={8}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                    <text
                        x={0}
                        y={0}
                        dominantBaseline="hanging"
                        className="daily-activity-chart__title">
                        <tspan fontSize="15">Activité quotidienne</tspan>
                    </text>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        domain={[
                            (dataMax) => dataMax - 2,
                            (dataMax) => dataMax + 1
                        ]}
                        orientation={'right'}
                        tickCount={3}
                    />
                    <YAxis yAxisId="calories" dataKey="calories" hide={true} />
                    <Tooltip />
                    {/*<Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        height={72}
                    />*/}
                    <Legend
                        verticalAlign="top"
                        content={
                            <CustomLegendChart>
                                {Object.keys(data.formattedSessions[0]).map(
                                    (item) =>
                                        item === 'day' ? null : (
                                            <li
                                                key={item}
                                                className={`${item}-li circle`}>
                                                {item === 'kilogram'
                                                    ? 'Poids (en kg)'
                                                    : 'Calories brûlées (kCal)'}
                                            </li>
                                        )
                                )}
                            </CustomLegendChart>
                        }
                    />
                    <Bar
                        yAxisId="kilogram"
                        className="kilogramBar"
                        dataKey="kilogram"
                        radius={[100, 100, 0, 0]}
                        barSize={7}
                    />
                    <Bar
                        yAxisId="calories"
                        className="caloriesBar"
                        dataKey="calories"
                        radius={[100, 100, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Activity;
