import PropTypes from 'prop-types';

export function Phonebook({ handler }) {
  return (
    <>
      <h1>Phonebook</h1>
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

Phonebook.propTypes = {
  handler: PropTypes.func.isRequired,
};

export function Contacts({ state, filterHandler, deleteHandler }) {
  const { contacts, filter } = state;
  return (
    <>
      <h1>Contacts</h1>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onInput={filterHandler} />
      <ul>
        {contacts
          .filter(
            ({ name }) =>
              !filter || name.toLowerCase().startsWith(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number} <button type='button' onClick={() => deleteHandler(id)}>delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}

Contacts.propTypes = {
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
