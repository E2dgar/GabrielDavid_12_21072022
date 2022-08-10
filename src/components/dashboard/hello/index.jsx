import './index.css';
import { GetUser } from '../../../services/http';
import { useFetchByFn } from '../../../hook/fetch';
import Error from '../../atoms/error';
import Loader from '../../atoms/loader';

/**
 * Component to display greatings and hello user
 * @component
 */
const Hello = () => {
    const { data, isLoading, error } = useFetchByFn(GetUser);

    if (isLoading) {
        return <Loader message={' Your welcome '} />;
    }
    if (error) {
        return <Error message={' welcome '} className="hello-error" />;
    }
    console.log('data', data);

    return (
        <section className="hello">
            <h1>
                Bonjour <span>{data.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
};

export default Hello;
