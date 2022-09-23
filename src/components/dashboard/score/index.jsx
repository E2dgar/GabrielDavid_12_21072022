import './index.css';
import { GetScore } from '../../../services/http';
import { useFetchByFn } from '../../../hook/fetch';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 *  Component for showing Score Chart
 */
const Score = () => {
    const { data, isLoading, error } = useFetchByFn(GetScore);

    if (isLoading) {
        return <Loader message={' Your score '} />;
    }
    if (error) {
        return <Error message={' score '} className="score-error" />;
    }

    return (
        <section className="score">
            <ResponsiveContainer>
                <RadialBarChart
                    background="red"
                    width={170}
                    height={250}
                    innerRadius={90}
                    outerRadius={90}
                    barSize={10}
                    data={data.formattedScore}
                    startAngle={200}
                    endAngle={data.formattedScore[0].score - 70}>
                    <RadialBar
                        label={false}
                        cornerRadius={5}
                        dataKey="score"
                        clockWise
                    />
                    <text
                        className="score-heading"
                        x={24}
                        y={30}
                        dominantBaseline="hanging">
                        Score
                    </text>
                    <text textAnchor="middle">
                        <tspan className="percent" x="50%" y="50%">
                            {`${data.labelScore}%`}
                        </tspan>
                        <tspan className="label-score" x="50%" y="62.5%">
                            de votre
                        </tspan>
                        <tspan className="label-score" x="50%" y="74%">
                            objectif
                        </tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Score;
