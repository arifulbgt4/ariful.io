// Types
import { FieldShowErrorOptions, FieldMetaOptions } from "./Types";

export const composeValidators =
  (...validators: any) =>
  (value: any) =>
    validators.reduce(
      (error: any, validator: Function) => error || validator(value),
      undefined
    );

export const required =
  (text: string = "Required", isRequired: boolean = true) =>
  (value: any) =>
    isRequired && (value ? undefined : text);

export const minLength =
  (length: number = 0, text?: string) =>
  (value: any) =>
    value?.length < length && (text || `Min length ${length}`);

export const maxLength =
  (length: number = 0, text?: string) =>
  (value: any) =>
    value?.length > length && (text || `Max length ${length}`);

export const showErrorOnChange: FieldShowErrorOptions = ({
  meta: { submitError, dirtySinceLastSubmit, error, touched, modified },
}: FieldMetaOptions) =>
  !!(
    ((submitError && !dirtySinceLastSubmit) || error) &&
    (touched || modified)
  );
