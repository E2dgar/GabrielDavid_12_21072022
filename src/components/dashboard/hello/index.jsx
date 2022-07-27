import UserModel from '../../../models/User';
import './index.css';

const Hello = ({ user, isLoading, error }) => {
    if (isLoading) {
        return <p>Load</p>;
    }

    if (error) {
        return <p>errueur</p>;
    }

    const userModel = new UserModel(user);

    return (
        <section className="hello">
            <h1>
                Bonjour <span>{userModel.firstName}</span>{' '}
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
};

export default Hello;
