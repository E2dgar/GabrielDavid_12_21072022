import { GetUser } from '../../../services/http';
import Activity from '../../dashboard/activity';
import Hello from '../../dashboard/hello';
import './index.css';
import UserModel from '../../../models/User';

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
