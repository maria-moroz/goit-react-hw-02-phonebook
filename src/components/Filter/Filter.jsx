import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';

export default function Filter({ handleFilterChange }) {
  const filterId = nanoid();

  return (
    <div className={s.fieldContainer}>
      <label htmlFor={filterId} className={s.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="name"
        id={filterId}
        className={s.input}
        onChange={handleFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
