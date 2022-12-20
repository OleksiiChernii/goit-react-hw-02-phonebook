import PropTypes from 'prop-types';

export function Filter({ filterHandler }) {
  return <input type="text" name="filter" onInput={filterHandler} />;
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};
