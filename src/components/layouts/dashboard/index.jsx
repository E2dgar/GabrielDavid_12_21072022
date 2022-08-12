import Activity from '../../dashboard/activity';
import Hello from '../../dashboard/hello';
import AverageSessions from '../../dashboard/averageSessions';
import Performance from '../../dashboard/performance';
import './index.css';

const Dashboard = () => {
    return (
        <main>
            <Hello />

            <Activity />

            <AverageSessions />

            <Performance />
        </main>
    );
};

export default Dashboard;
