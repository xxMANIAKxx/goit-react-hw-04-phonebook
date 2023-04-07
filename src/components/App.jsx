import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import style from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    enterContact
      ? alert(`${name} is already in contact`)
      : setContacts([contact, ...contacts])
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

  return (
      
      <div className={style.container} >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={style.titleContacts}>Contacts</h2>
      <div className={style.allContacts}>All contacts: {contacts.length}</div>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} changeFilter={changeFilter} />
          <ContactList
            contacts={visibleContacts()}
            deleteContact={deleteContact}
          />
        </>) : (
          <p className={style.empty}>Contact list is empty</p>
          )}
      </div>
    );
  }