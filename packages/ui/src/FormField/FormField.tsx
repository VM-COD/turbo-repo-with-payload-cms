import React from 'react';
import { IFormFieldProps, SelectDropdownVariant } from './FormField.model';
import './FormField.scss';

/**
 * @prop {string} label - Shows passed label if its truthy and hides when its falsy.
 * This prop is optional.
 */

/**
 * @prop {ReactNode} children - Sets form field element
 * This prop is mandatory.
 */

/**
 * @prop {ReactNode} prefix - Sets prefix for form field
 * This prop is optional.
 */

/**
 * @prop {ReactNode} suffix - Sets suffix for form field
 * This prop is optional.
 */

/**
 * @prop {boolean} showLabelAtTop - Sets label to top of the form field element when its true and sets as row when its false
 * This prop is optional and its default value is true.
 */

/**
 * @prop {boolean} required - Sets form element as required field and adds * to the label when its true
 * This prop is optional and its default value is false.
 */

/**
 * @prop {string} errorMessage - Sets error message to the form field
 * This prop is optional and its default value is empty string.
 */

/**
 * @prop {boolean} isUpperCase - Sets label in uppercase
 * This prop is optional and its default value is true.
 */

/**
 * @prop {null | SelectDropdownVariant} variant - Sets variant of the form field
 * This prop is optional and its default value is null.
 */

/**
 * @prop {string} cssClasses - Sets css class to form field container
 * This prop is optional and its default value is empty string.
 */

/**
 * @prop {string} elementContainerCssClasses - Sets css class to form field element wrapper
 * This prop is optional and its default value is empty string.
 */

const FormField: React.FC<IFormFieldProps> = ({
  label,
  children,
  prefix,
  suffix,
  showLabelAtTop = true,
  required = false,
  errorMessage = '',
  isUpperCase = true,
  variant = null,
  cssClasses = '',
  elementContainerCssClasses = ''
}) => {
  return (
    <div
      className={`form-field-wrapper ${!showLabelAtTop ? 'form-field-row flex items-center' : ''} ${cssClasses} ${variant === SelectDropdownVariant.unstyled ? 'unstyled-dropdown' : variant === SelectDropdownVariant.inlineLabel ? 'inline-label' : ''}`}
    >
      {label ? (
        <label
          className={`${showLabelAtTop ? 'sm:mb-8 xs:mb-4' : 'w-[40%]'} ${required ? 'required' : ''} inline-block ${isUpperCase ? 'text-uppercase' : ''} px-8 text-primary-text-color-dark leading-[19.6px]`}
        >
          {label}
        </label>
      ) : null}
      <div
        className={`form-field-element-wrapper gap-[8px] hover:outline-none sm:min-h-[52px] xs:min-h-[44px] xs:!border-[1px] sm:!border-[1.5px] border-input-border-color text-primary-text-color-dark px-12 bg-surface-bg-sunken-color rounded-[12px] !max-w-[100%] flex items-center no-wrap ${errorMessage ? 'error bg-transparent border-interactive-text-color-dark' : ''} ${elementContainerCssClasses}`}
      >
        {prefix && <div className="prefix flex">{prefix}</div>}
        {children}
        {suffix && <div className="suffix flex">{suffix}</div>}
      </div>
      {errorMessage ? (
        <p className="caption error-text text-error-text-color px-8 py-4">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default FormField;
