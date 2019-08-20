import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

registerLocale('pt-BR', ptBR);

export default function DatePicker({ name, placeholder }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        placeholderText={placeholder}
        locale="pt-BR"
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
