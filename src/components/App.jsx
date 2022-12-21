import { useState, useEffect } from 'react';
import Section from './Section';
import Search from './Search';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

import { nanoid } from 'nanoid';

const data = [
  { id: 'S0V2NE44z1i733lO3c7Ic', name: 'Вячеслав', number: '654564' },
  { id: 'msqBJPeJouMKjvIDos0pw', name: 'Alena', number: '258489' },
  { id: 'msqBJPeJouMKjvIDos0pl', name: 'Serhiy', number: '348596' },
  { id: 'S0V2NE44z1i733lO3c7I2', name: 'Вячеслав', number: '654564' },
  { id: 'msqBJPeJouMKjvIDos0p3', name: 'Alena', number: '258489' },
  { id: 'msqBJPeJouMKjvIDos0p4', name: 'Serhiy', number: '348596' },
];

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const locStor = JSON.parse(localStorage.getItem('state'));
    if (!locStor) {
      return;
    }
    setContacts(locStor);
  }, []);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(contacts));
  });

  const onSubmit = (name, number) => {
    const newData = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    setContacts([...contacts, newData]);
  };

  const onClickDelete = event => {
    const { id } = event.target.dataset;

    setContacts(() => {
      const newData = contacts.filter(el => el.id !== id);
      return [...newData];
    });
  };

  const onChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const renderFilter = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onSubmitApp={onSubmit} />
      </Section>

      <Section title="Contacts">
        <Search label="Find contacts by name" onChange={onChange} />

        <ContactList contactList={renderFilter()} onClick={onClickDelete} />
      </Section>
    </div>
  );
};

export default App;
