import Activity from '../../dashboard/activity';
import Hello from '../../dashboard/hello';
import './index.css';

const Dashboard = () => {
    return (
        <main>
            <Hello />

            <Activity />

            {/*} <AverageSessions user={user} />*/}
        </main>
    );
};

export default Dashboard;
