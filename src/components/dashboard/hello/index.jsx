import './index.css';
import UserModel from '../../../models/User';
import { GetUser } from '../../../services/http';
import { useFetch } from '../../../hook/fetch';
import { API_PATH } from '../../../constants';
import { useEffect } from 'react';
import { useState } from 'react';

const Hello = () => {
    GetUser().then((result) => console.log(result));
    /*const { user, isLoading, error } = GetUser();*/

    /* if (isLoading) {
        return <p> User is loading</p>;
    }
    if (error) {
        return <p>User error</p>;
    }*/
    /* console.log('data', user);
    /* const user = new UserModel(data);*/

    return (
        <section className="hello">
            {/*}
            <h1>
                Bonjour <span>{userData.user.firstName}</span>{' '}
            </h1>
    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>*/}
        </section>
    );
};

export default Hello;
