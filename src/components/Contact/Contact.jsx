import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={css.container}>
            <p className={css.text}>{contact.name}</p>
            <p className={css.text}>{contact.number}</p>
            <button className={css.btn} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </div>
    );
}