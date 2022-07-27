import { API_PATH } from "../../../constants"
import { useFetch } from "../../../services/http"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './index.css'

const Activity = () => {
  const { data: activity, isLoading: activityIsLoading, error: activityError} = useFetch(API_PATH.ACTIVITY);

  if(activityIsLoading){
    return <p>Load</p>
  }
  if(activityError){
    return <p>error</p>
  }
  const userActivity = activity.filter(user => user.userId === 12)[0].sessions;
  
  return (
    <section className="activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={10}
          data={userActivity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  domain={[1,100]}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar className="kilogramBar" dataKey="kilogram" radius={[100, 100, 0, 0,]} barSize={7}/>
          <Bar className="caloriesBar" dataKey="calories" radius={[100, 100, 0, 0,]} barSize={7}/>
        </BarChart>
      </ResponsiveContainer>
    </section>
    )
}

export default Activity