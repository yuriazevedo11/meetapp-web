import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactDatePicker, { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/pt-BR';

registerLocale('pt-BR', enGB);

export default function DatePicker({ name, placeholder }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <ReactDatePicker
        name={name}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        placeholderText={placeholder}
        locale="pt-BR"
      />
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
