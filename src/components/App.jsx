import React from 'react';
import Section from './Section';
import Search from './Search';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'S0V2NE44z1i733lO3c7Ic', name: 'Вячеслав', number: '654564' },
      { id: 'msqBJPeJouMKjvIDos0pw', name: 'Alena', number: '258489' },
      { id: 'msqBJPeJouMKjvIDos0pl', name: 'Serhiy', number: '348596' },
      { id: 'S0V2NE44z1i733lO3c7I2', name: 'Вячеслав', number: '654564' },
      { id: 'msqBJPeJouMKjvIDos0p3', name: 'Alena', number: '258489' },
      { id: 'msqBJPeJouMKjvIDos0p4', name: 'Serhiy', number: '348596' },
    ],
    filter: '',
  };

  onSubmit = (name, number) => {
    const newData = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.some(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newData],
      };
    });
  };

  onClickDelete = event => {
    const { id } = event.target.dataset;
    this.setState(prevState => {
      const newData = prevState.contacts.filter(el => el.id !== id);
      return { contacts: [...newData] };
    });
  };

  onChange = event => {
    this.setState({ filter: event.target.value });
  };

  filter = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  componentDidMount() {
    const locStor = JSON.parse(localStorage.getItem('state'));
    this.setState(prevState => ({ ...prevState, ...locStor }));
  }
  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>

        <Section title="Contacts">
          <Search label="Find contacts by name" onChange={this.onChange} />

          <ContactList
            contactList={this.filter()}
            onClick={this.onClickDelete}
          />
        </Section>
      </div>
    );
  }
}

export default App;
