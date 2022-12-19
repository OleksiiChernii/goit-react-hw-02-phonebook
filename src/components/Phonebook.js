import PropTypes from 'prop-types';

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

function ContactForm({ handler }) {
  return (
    <>
      <form onSubmit={handler}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export function ContactList({ state, deleteHandler }) {
  const { contacts, filter } = state;
  return (
    <>
      <p>Find contacts by name</p>
      <ul>
        {contacts
          .filter(
            ({ name }) =>
              !filter || name.toLowerCase().startsWith(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}{' '}
              <button type="button" onClick={() => deleteHandler(id)}>
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

function Filter({ filterHandler }) {
  return <input type="text" name="filter" onInput={filterHandler} />;
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

ContactForm.propTypes = {
  handler: PropTypes.func.isRequired,
};

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
