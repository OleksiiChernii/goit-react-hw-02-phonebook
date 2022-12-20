import PropTypes from 'prop-types';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export function Phonebook({ state, handler, filterHandler, deleteHandler }) {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handler={handler} />
      <h2>Contacts</h2>
      <Filter filterHandler={filterHandler} />
      <ContactList state={state} deleteHandler={deleteHandler} />
    </>
  );
}

Phonebook.propTypes = {
  handler: PropTypes.func.isRequired,
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  filterHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
