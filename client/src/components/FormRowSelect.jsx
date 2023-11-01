const FormRowSelect = ({ name, labelText, list, defaultValue = "" }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className='form-select'
        defaultValue={defaultValue}
      >
        {list.map((name) => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
