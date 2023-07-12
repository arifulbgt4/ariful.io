// Types
import { FieldShowErrorOptions, FieldMetaOptions } from "./Types";

export const showErrorOnChange: FieldShowErrorOptions = ({
  meta: { submitError, dirtySinceLastSubmit, error, touched, modified },
}: FieldMetaOptions) =>
  !!(
    ((submitError && !dirtySinceLastSubmit) || error) &&
    (touched || modified)
  );

export const required =
  (text?: string, isRequired: boolean = true) =>
  (value: any) =>
    isRequired && (value ? undefined : text || "Required");
