import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

export default function TextField({ id, label, type, onChange, fieldData }) {
  const inputId = `${id}-input`;
  const labelId = `${id}-label`;

  return (
    <fieldset className='field-contaier'>
      <label
        id={labelId}
        htmlFor={inputId}
        className={
          fieldData ? 'field-label fill field-text' : 'field-label field-text'
        }
      >
        {label}
      </label>
      <input
        id={inputId}
        name={id}
        type={type}
        className={
          fieldData ? 'field-input fill field-text' : 'field-input field-text'
        }
        onChange={onChange}
        style={{ fontFamily: `${montserrat.style.fontFamily}` }}
        value={fieldData || ''}
        required={true}
      />
    </fieldset>
  );
}
