import PropTypes from 'prop-types';

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
