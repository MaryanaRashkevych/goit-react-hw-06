import css from './ContactList.module.css';
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <ul className={css.list}>
          {visibleContacts.map((contact) => (
              <li className={css.item} key={contact.id}>
                  <Contact contact={contact} />
              </li>
          ))}
      </ul>
  );
}