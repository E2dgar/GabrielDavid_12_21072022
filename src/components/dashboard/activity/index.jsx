import { GetActivity } from '../../../services/http';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import CustomLegendChart from '../../atoms/customLegend';
import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';

/**
 *  Component for showing Activity Chart
 */
const Activity = () => {
    const { data, isLoading, error } = useFetchByFn(GetActivity);

    if (isLoading) {
        return <Loader message={' Your activity '} />;
    }
    if (error) {
        return <Error message={' activity '} className="activity-error" />;
    }

    const toolTipFormatter = (value, name) => {
        return name === 'kilogram' ? [value + 'kg'] : [value + 'kCal'];
    };

    return (
        <section className="activity">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data.formattedSessions}
                    barCategoryGap={7}
                    barGap={8}
                    margin={{
                        top: 0,
                        right: 70,
                        left: 20,
                        bottom: 50
                    }}>
                    <text
                        x={0}
                        y={0}
                        dominantBaseline="hanging"
                        className="activity-chart-text">
                        <tspan>Activité quotidienne</tspan>
                    </text>
                    <Legend
                        verticalAlign="top"
                        wrapperStyle={{ padding: '0 0 60px 0' }}
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

                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={16}
                    />
                    <YAxis
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        domain={[
                            (dataMax) => dataMax - 2,
                            (dataMax) => dataMax + 1
                        ]}
                        orientation={'right'}
                        tickCount={3}
                        tickMargin={40}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis yAxisId="calories" dataKey="calories" hide={true} />
                    <Tooltip
                        contentStyle={{
                            background: 'var(--color-primary-chart)',
                            color: 'white'
                        }}
                        labelStyle={{
                            display: 'none'
                        }}
                        formatter={toolTipFormatter}
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
