import PropTypes from 'prop-types';
import React from 'react';
import Search from './Search';
import Button from './Button';
import s from './style.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.resetForm();
  };

  onChange = event => {
    const value = event.target.name;
    this.setState({ [value]: event.target.value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <s.Section as="form" onSubmit={this.onSubmit}>
        <Search
          onChange={this.onChange}
          value={this.state.name}
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Search
          onChange={this.onChange}
          value={this.state.number}
          label="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button type="submit" name="Add contact" />
      </s.Section>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  as: PropTypes.string,
  children: PropTypes.func,
};
