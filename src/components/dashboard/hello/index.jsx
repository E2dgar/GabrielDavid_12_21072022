import './index.css';
import UserModel from '../../../models/User';
import { GetUser } from '../../../services/http';
import { useFetch } from '../../../hook/fetch';
import { API_PATH } from '../../../constants';
import { useEffect } from 'react';

const Hello = () => {
    /*const { user, isLoading, error } = GetUser();*/
    /*  const { user, isLoading, error } = await GetUser();

    /* if (isLoading) {
        return <p> User is loading</p>;
    }
    if (error) {
        return <p>User error</p>;
    }*/
    /* console.log('data', user);
    /* const user = new UserModel(data);*/
    console.log('Hello user', GetUser());
    return (
        <section className="hello">
            {/*}  <h1>
                Bonjour <span>{user.firstName}</span>{' '}
            </h1>
    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>*/}
        </section>
    );
};

export default Hello;
