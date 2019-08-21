import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { setHours, setMinutes, getHours, getMinutes, getDate } from 'date-fns';

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

  function calcMinTime() {
    const today = getDate(new Date());
    const selectedDay = getDate(selected);

    if (!selected || today === selectedDay) {
      return setHours(
        setMinutes(new Date(), getMinutes(new Date())),
        getHours(new Date())
      );
    }

    return setHours(setMinutes(new Date(), 0), 0);
  }

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        minTime={calcMinTime()}
        maxTime={setHours(setMinutes(new Date(), 30), 23)}
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
