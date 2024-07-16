'use client';

import React, { useState } from 'react';

import FormField from '../FormField';
// import Icon from '../../atoms/icon';
// import { Icons } from '../../atoms/icon/models/model';
import './DatePickerInput.scss';
import { IDatepickerProps, Value, ValuePiece } from './DatePickerInput.model';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DatePicker as ReactDatePicker } from 'react-date-picker';
// import { defaultDatePickerFormat } from '../../shared/days';

/**
 * @prop {string} label - Sets label of the datepicker
 * This prop is optional.
 */

/**
 * @prop {string} errorMessage - Sets error message of the datepicker
 * This prop is optional.
 */

/**
 * @prop {boolean} disabled - Makes datepicker input disabled
 * This prop is optional.
 */

/**
 * @prop {Date | string | Date[] | string[]} selectedDate - Sets the selected value of datepicker
 * This prop is optional.
 */

/**
 * @prop {(value) => void} onDateChange - Event emitter gets emitted when date changes.
 * This prop is optional.
 */

/**
 * @prop {string} format - date format for date picker.
 * This prop is optional.
 */

/**
 * @prop {string , Date, string[], Date[]} - date passed for date picker.
 * This prop is optional.
 */

const defaultDatePickerFormat = 'dd/MM/yy';

const DatepickerInput = ({
  onDateChange,
  format = defaultDatePickerFormat,
  label,
  errorMessage,
  disabled,
  selectedDate
}: IDatepickerProps) => {
  const [value, setDate] = useState<ValuePiece>((selectedDate as ValuePiece) || null);

  const onChange = (event: Value) => {
    onDateChange?.(event as ValuePiece);
    setDate(event as ValuePiece);
  };

  return (
    <FormField
      errorMessage={errorMessage}
      label={label}
    >
      <ReactDatePicker
        onChange={onChange}
        value={value}
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        yearPlaceholder="YYYY"
        showLeadingZeros={false}
        format={format}
        disabled={disabled}
        clearIcon={value ? undefined : null}
      />
    </FormField>
  );
};
export default DatepickerInput;
