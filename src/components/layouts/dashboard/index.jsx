import { GetUser } from '../../../services/http';
import Activity from '../../dashboard/activity';
import Hello from '../../dashboard/hello';
import './index.css';
import UserModel from '../../../models/User';

const Dashboard = () => {
    const { data, isLoading, error } = GetUser();

    if (isLoading) {
        return <p> User is loading</p>;
    }
    if (error) {
        return <p>User error</p>;
    }
    console.log('dash', data);
    const user = new UserModel(data);

    return (
        <main>
            <Hello user={user} />

            <Activity userId={user.id} />

            {/*} <AverageSessions user={user} />*/}
        </main>
    );
};

export default Dashboard;
