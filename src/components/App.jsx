import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <div className={css.container}>
                <h1 className={css.title}>Phonebook</h1>
                <ContactForm />
                <SearchBox />
                <ContactList />
            </div>
        </Provider>
    );
}
