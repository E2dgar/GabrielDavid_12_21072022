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
import './index.css';
import ActivityModel from '../../../models/Activity';

const Activity = () => {
    /*const { data, isLoading, error } = GetActivity();

    if (isLoading) {
        return <p>Activity is loading</p>;
    }
    if (error) {
        return <p>error actvivyt</p>;
    }
    const userActivity = new ActivityModel(data);

    return (
        <section className="activity">
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={10}
                    data={userActivity.formattedSessions}
                    margin={{
                        top: 32,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
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
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        height={72}
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
    );*/
};

export default Activity;
