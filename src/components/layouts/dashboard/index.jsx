import Activity from '../../dashboard/activity';
import Hello from '../../dashboard/hello';
import { useFetch } from '../../../services/http';
import { API_PATH } from '../../../constants';
import './index.css';

const Dashboard = () => {
  const {data: user, isLoading: userIsloading, error: errorUser} = useFetch(API_PATH.USER, 12);
  const {data: activity, isLoading: activityIsloading, error: activityError} = useFetch(API_PATH.ACTIVITY);
 
  return (
    <main>
      <Hello user={user} isLoading={userIsloading} error={errorUser}/>

      <Activity data={activity} isLoading={activityIsloading} error={activityError}/>
    </main>
    );
}

export default Dashboard