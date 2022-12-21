import PropTypes from 'prop-types';
import Search from './Search';
import Button from './Button';
import s from './style.styled';
import { useState } from 'react';

const ContactForm = ({ onSubmitApp }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onSubmitApp(name, number);
    resetForm();
  };

  const onChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <s.Section as="form" onSubmit={onSubmit}>
      <Search
        onChange={onChange}
        value={name}
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <Search
        onChange={onChange}
        value={number}
        label="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button type="submit" name="Add contact" />
    </s.Section>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  as: PropTypes.string,
  children: PropTypes.func,
};
