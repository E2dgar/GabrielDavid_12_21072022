import './index.css';
import { useFetchByFn } from '../../../hook/fetch';
import { GetPerformance } from '../../../services/http';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    ResponsiveContainer
} from 'recharts';

/**
 *  Component for showing Performance Chart
 */
const Performance = () => {
    const { data, isLoading, error } = useFetchByFn(GetPerformance);

    if (isLoading) {
        return <Loader message={' Your performance '} />;
    }
    if (error) {
        return (
            <Error message={' performance '} className="performance-error" />
        );
    }
    console.log('performance', data.formattedPerf);

    return (
        <section className="perf">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={data.formattedPerf}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar dataKey="value"  />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Performance;
