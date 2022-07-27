import { API_PATH } from "../../../constants"
import { useFetch } from "../../../services/http"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './index.css'
import ActivityModel from "../../../models/Activity";

const Activity = () => {
  const { data: activity, isLoading: activityIsLoading, error: activityError} = useFetch(API_PATH.ACTIVITY);

  if(activityIsLoading){
    return <p>Load</p>
  }
  if(activityError){
    return <p>error</p>
  }
  const userActivity = new ActivityModel(activity.filter(user => user.userId === 12)[0]);
  console.log('model', userActivity.formattedSessions)
  return (
    <section className="activity">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={10}
          data={userActivity.formattedSessions}
          margin={{
            top: 32,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day"/>
          <YAxis yAxisId="kilogram" dataKey="kilogram" domain={[dataMax => dataMax - 2, dataMax => dataMax + 1]} orientation={"right"} tickCount={3} />
          <YAxis yAxisId="calories" dataKey="calories" hide={true} />
          <Tooltip />
          <Legend verticalAlign="top" align="right" iconType="circle" height={72}/>
          <Bar yAxisId="kilogram" className="kilogramBar" dataKey="kilogram" radius={[100, 100, 0, 0,]} barSize={7} />
          <Bar yAxisId="calories" className="caloriesBar" dataKey="calories" radius={[100, 100, 0, 0,]} barSize={7}/>
        </BarChart>
      </ResponsiveContainer>
    </section>
    )
}

export default Activity