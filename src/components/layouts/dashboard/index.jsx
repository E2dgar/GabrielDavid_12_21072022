import Activity from '../../dashboard/activity';
import Hello from '../../dashboard/hello';
import AverageSessions from '../../dashboard/averageSessions';
import './index.css';

const Dashboard = () => {
    return (
        <main>
            <Hello />

            <Activity />

            <AverageSessions />
        </main>
    );
};

export default Dashboard;
