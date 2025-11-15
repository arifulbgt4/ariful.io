// React
import { FC } from "react";
// packages
import { Field } from "react-final-form";
// Utils
import { cn } from "src/lib/utils";
// Util
import { showErrorOnChange } from "./util";
// Types
import { TextFieldProps, TextFieldWrapperProps } from "./Types";

const TextField: FC<TextFieldProps> = ({
  name,
  type = "text",
  fieldProps,
  ...rest
}) => {
  return (
    <Field
      name={name}
      type={type}
      render={({ input, meta }) => (
        <TextFieldWrapper input={input} meta={meta} {...rest} />
      )}
      {...fieldProps}
    />
  );
};

// ||-----------------------------------||
// ||   TextField Wrapper with Tailwind ||
// ||   *** Don't export the component  ||
// ||-----------------------------------||
const TextFieldWrapper: FC<TextFieldWrapperProps> = ({
  input: { name, value, type, onChange, onBlur, onFocus, ...restInput },
  meta,
  helperText,
  required,
  label,
  multiline,
  rows,
  ...rest
}) => {
  const { error, submitError } = meta;
  const isError = showErrorOnChange({ meta });
  const errorMessage = isError ? error || submitError : helperText;

  const InputComponent = multiline ? "textarea" : "input";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </label>
      )}
      <InputComponent
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        rows={multiline ? rows : undefined}
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          multiline && "min-h-[80px] resize-y",
          isError && "border-destructive focus-visible:ring-destructive"
        )}
        {...restInput}
        {...rest}
      />
      {errorMessage && (
        <p
          className={cn(
            "mt-2 text-sm",
            isError ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
// ||----------------------------end

export default TextField;
