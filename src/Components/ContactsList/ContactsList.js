import ContactsItem from './ContactsItem/ContactsItem';
import s from './ContactList.module.css';

export default function Contacts({ contacts, onDelete }) {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    </>
  );
}
