import style from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <p className={style.contact}>
            {name}............
            {number}
          </p>
          <button
            className={style.btn}
            type="submit"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};