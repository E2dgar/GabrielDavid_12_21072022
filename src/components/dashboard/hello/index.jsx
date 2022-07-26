import "./index.css";
import { API_PATH } from "../../../constants"
import { useFetch } from "../../../services/http"

const Hello = () => {
  const {data: userData, isLoading: userIsLoading, error: userError} = useFetch(API_PATH.USER)

  if(userIsLoading){
    return <p>Load</p>
  }

  if(userError){
    return <p>errueur</p>
  }

  const user = userData.filter(user => user.id === 12);
console.log(user)
  return(
    <section className="hello">
      <h1>Bonjour <span>{user[0].userInfos.firstName}</span> </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  )
}

export default Hello