import { useState, useEffect } from 'react';
import shortId from 'shortid';
import Form from './Components/Form/Form';
import Contacts from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const DeleteContact = contactId => {
    setContacts(c => c.filter(contact => contactId !== contact.id));
  };

  const addContact = data => {
    const newContact = {
      id: shortId.generate(),
      name: data.name,
      number: data.number,
    };

    const getContactsName = contacts.map(contact => contact.name.toLowerCase());

    const isAlreadyInContacts = getContactsName.includes(
      data.name.toLowerCase(),
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts!`);
    } else {
      setContacts(c => [newContact, ...contacts]);
    }
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={visibleContacts} onDelete={DeleteContact} />
    </div>
  );
}
