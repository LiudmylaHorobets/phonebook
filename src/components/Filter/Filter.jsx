import css from './Filter.module.css';

export const Filter = ({ value, handleFilterContacts }) => {
  const handleChange = e => handleFilterContacts(e.target.value);
  
  return (
    <div className={css.wrapFilter}>
      <p className={css.titleFilter}>Find contacts by name</p>
      <input
        className={css.inputFilter}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};