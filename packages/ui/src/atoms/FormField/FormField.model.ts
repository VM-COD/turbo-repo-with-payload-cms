import { ReactNode } from 'react';

export interface IFormFieldProps {
  label?: string;
  children: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  showLabelAtTop?: boolean;
  required?: boolean;
  errorMessage?: string;
  isUpperCase?: boolean;
  cssClasses?: string;
  variant?: SelectDropdownVariant | null;
  elementContainerCssClasses?: string;
}

export enum SelectDropdownVariant {
  unstyled = 'unstyled',
  inlineLabel = 'inline-label'
}