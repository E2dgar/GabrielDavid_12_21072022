import Activity from '../../dashboard/activity';
import Hello from '../../dashboard/hello';
import AverageSessions from '../../dashboard/averageSessions';
import Performance from '../../dashboard/performance';
import './index.css';
import Indicators from '../../dashboard/indicators';
import Score from '../../dashboard/score';

/**
 * Component for showing the analytics dashboard
 * @returns {JSX.Element} Dashboard
 */
const Dashboard = () => {
    return (
        <main>
            <Hello />

            <Activity />

            <AverageSessions />

            <Performance />

            <Score />

            <Indicators />
        </main>
    );
};

export default Dashboard;
