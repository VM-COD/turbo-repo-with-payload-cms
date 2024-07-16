import { IFormFieldProps } from '../FormField/FormField.model';

export interface IDatepickerProps extends Omit<IFormFieldProps, 'children'> {
  onDateChange?: (value: Value) => void;
  format?: string;
  selectedDate?: Date | string | Date[] | string[];
  disabled?: boolean;
}

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];
