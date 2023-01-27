import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

function createOptions(options) {
  let fields = [];

  for (let option in options) {
    let value = options[option].value;
    fields.push(
      <option id={value} key={value} value={value}>
        {options[option].label}
      </option>
    );
  }

  return fields;
}

export default function OptionsField({
  id,
  label,
  options,
  handleChange,
  fieldData
}) {
  const inputId = `${id}-input`;

  return (
    <fieldset className='field-contaier'>
      <select
        name={id}
        id={inputId}
        onChange={handleChange}
        className={
          fieldData ? 'field-input fill field-text' : 'field-input field-text'
        }
        style={{
          fontFamily: `${montserrat.style.fontFamily}`,
          cursor: 'pointer'
        }}
        required={true}
        value={fieldData || ''}
      >
        {!fieldData && (
          <option
            id={`${id}-emptyOption`}
            name={`${id}-emptyOption`}
            value=''
            className='field-text'
          >
            {label}
          </option>
        )}

        {createOptions(options)}
      </select>
    </fieldset>
  );
}
