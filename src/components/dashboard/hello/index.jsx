import './index.css';

const Hello = ({ user }) => {
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
