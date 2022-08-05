import './index.css';
import UserModel from '../../../models/User';
import { GetUser } from '../../../services/http';

const Hello = () => {
    const { data, isLoading, error } = GetUser();

    if (isLoading) {
        return <p> User is loading</p>;
    }
    if (error) {
        return <p>User error</p>;
    }

    const user = new UserModel(data);
    return (
        <section className="hello">
            <h1>
                Bonjour <span>{user.firstName}</span>{' '}
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
};

export default Hello;
