import './index.css';
import { GetScore } from '../../../services/http';
import { useFetchByFn } from '../../../hook/fetch';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';
import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const Score = () => {
    const { data, isLoading, error } = useFetchByFn(GetScore);

    if (isLoading) {
        return <Loader message={' Your score '} />;
    }
    if (error) {
        return <Error message={' score '} className="score-error" />;
    }
    console.log('score', data.formattedScore);

    return (
        <section className="score">
            <ResponsiveContainer>
                <RadialBarChart
                    width={270}
                    height={250}
                    innerRadius={90}
                    outerRadius={90}
                    barSize={10}
                    data={data.formattedScore}
                    startAngle={90}
                    endAngle={data.formattedScore[0].score + 90}>
                    <RadialBar label={false} cornerRadius={5} dataKey="score" />
                    {/* <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                />*/}
                    {/*<Tooltip />*/}
                </RadialBarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Score;
