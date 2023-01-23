import { useEffect, useReducer, useState } from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

/* Components */
import TextField from './form/TextField';
import OptionsField from './form/OptionsField';

const fieldsValues = {
  name: {
    id: 'name',
    label: 'Name',
    value: '',
    type: 'textField',
    inputType: 'text'
  },
  price: {
    id: 'price',
    label: 'Price',
    value: '',
    type: 'textField',
    inputType: 'number'
  },
  units: {
    id: 'units',
    label: 'Units',
    value: '',
    type: 'optionField',
    options: [
      {
        value: 'kg',
        label: 'kg'
      },
      {
        value: 'lb',
        label: 'lb'
      },
      {
        value: 'g',
        label: 'g'
      },
      {
        value: 'ml',
        label: 'ml'
      },
      {
        value: 'L',
        label: 'L'
      },
      {
        value: '100g',
        label: '100g'
      },
      {
        value: 'other',
        label: 'Autre'
      }
    ]
  },
  stores: {
    id: 'store',
    label: 'Store',
    value: '',
    type: 'optionField',
    options: [
      {
        value: 'adonis',
        label: 'Adonis'
      },
      {
        value: 'maxi',
        label: 'Maxi'
      },
      {
        value: 'walmart',
        label: 'Walmart'
      },
      {
        value: 'superC',
        label: 'Super C'
      },
      {
        value: 'provigo',
        label: 'Provigo'
      },
      {
        value: 'metro',
        label: 'Metro'
      },
      {
        value: 'iga',
        label: 'IGA'
      },
      {
        value: 'other',
        label: 'Autre'
      }
    ]
  }
};

const formFields = {
  name: '',
  price: '',
  units: '',
  store: ''
};

function isFieldEmpty(content, labelElement, inputElement) {
  if (content) {
    floatingLabel(labelElement);
    fieldInputTransparent(inputElement);
  } else {
    labelInsideInput(labelElement);
    fieldInputEmpty(inputElement);
  }
}

function fieldInputTransparent(domElement) {
  domElement.classList.add('field-input-transparent');
}

function floatingLabel(domElement) {
  domElement.classList.add('field-label-fill');
}

function labelInsideInput(domElement) {
  domElement.classList.remove('field-label-fill');
}

function fieldInputEmpty(domElement) {
  domElement.classList.remove('field-input-transparent');
}

function addEventListeners(fieldsValues) {
  const keys = Object.keys(fieldsValues);

  keys.forEach((key) => {
    if (fieldsValues[key].type === 'textField') {
      const inputId = `${fieldsValues[key].id}-input`;
      const labelId = `${fieldsValues[key].id}-label`;

      const inputDOMElement = document.getElementById(inputId);
      const labelDOMElement = document.getElementById(labelId);

      inputDOMElement.addEventListener('focus', (event) => {
        labelDOMElement.classList.add('active');
      });

      inputDOMElement.addEventListener('blur', (event) => {
        labelDOMElement.classList.remove('active');

        isFieldEmpty(event.target.value, labelDOMElement, inputDOMElement);
      });
    }
  });
}

function createFields(
  handleChangeTextInput,
  handleChangeOptionInput,
  formData
) {
  var fields = [];
  const keys = Object.keys(fieldsValues);

  keys.forEach((key) => {
    if (fieldsValues[key].type === 'textField') {
      fields.push(
        <TextField
          key={fieldsValues[key].id}
          id={fieldsValues[key].id}
          label={fieldsValues[key].label}
          type={fieldsValues[key].inputType}
          onChange={handleChangeTextInput}
          fieldData={formData[key]}
        />
      );
    } else {
      fields.push(
        <OptionsField
          key={fieldsValues[key].id}
          id={fieldsValues[key].id}
          label={fieldsValues[key].label}
          options={fieldsValues[key].options}
          handleChange={handleChangeOptionInput}
        />
      );
    }
  });

  fields.push();

  return fields;
}

function formReducer(state, event) {
  return {
    ...state,
    [event.name]: event.value
  };
}

function removeEmptyOptionElement(name) {
  const emptyOptionElement = document.getElementById(`${name}-emptyOption`);

  if (emptyOptionElement) {
    emptyOptionElement.remove();
  }
}

function formDataFormating(event) {
  return {
    name: event.target.name,
    value: event.target.value
  };
}

export default function CreateUpdateForm({ closeForm }) {
  const [formData, setFormData] = useReducer(formReducer, formFields);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    Object.entries(formData).map(([name, value]) =>
      console.log(`name: ${name} - value: ${value}`)
    );

    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);

    closeForm();
  };

  const handleChangeTextInput = (event) => {
    setFormData(formDataFormating(event));
  };

  const handleChangeOptionInput = (event) => {
    var domElement = document.getElementById(`${event.target.name}-input`);
    fieldInputTransparent(domElement);

    if (event.target.value === 'other') {
    }

    setFormData(formDataFormating(event));

    removeEmptyOptionElement(event.target.name);
  };

  const fields = createFields(
    handleChangeTextInput,
    handleChangeOptionInput,
    formData
  );

  useEffect(() => {
    addEventListeners(fieldsValues);
  }, []);

  return (
    <div className='createUpdateForm-blur'>
      <form className='createUpdateForm-container' onSubmit={handleSubmit}>
        {fields}

        <div className='createUpdateForm-buttonsContainer'>
          <button
            type='button'
            className='createUpdateForm-cancelButton'
            style={{ fontFamily: `${montserrat.style.fontFamily}` }}
            onClick={closeForm}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='actionButton'
            style={{
              fontFamily: `${montserrat.style.fontFamily}`,
              fontSize: '16px'
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
