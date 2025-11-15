// React
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
// packages
import { FieldProps, FieldRenderProps, FieldMetaState } from "react-final-form";

export interface TextFieldProps
  extends Partial<
    Omit<
      InputHTMLAttributes<HTMLInputElement> &
        TextareaHTMLAttributes<HTMLTextAreaElement>,
      "onChange"
    >
  > {
  name: string;
  label?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  fieldProps?: Partial<FieldProps<any, any>>;
}

export interface TextFieldWrapperProps
  extends FieldRenderProps<string>,
    Omit<TextFieldProps, "name" | "fieldProps"> {}

export type FieldShowErrorOptions = (props: FieldMetaOptions) => boolean;

export interface FieldMetaOptions {
  meta: FieldMetaState<any>;
}
