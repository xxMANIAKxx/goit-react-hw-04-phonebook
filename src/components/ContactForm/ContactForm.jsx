import { useState } from 'react';
import PropTypes from 'prop-types'
import style from './ContactForm.module.css';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
  const handleChange = e => {
    const { name, value } = e.currentTarget;
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

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

    return (
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={style.inputName}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={style.inputNumber}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={style.buttonEditor}>
          Add contact
        </button>
      </form>
    );
  }

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  };