"use client";
// React
import { FC } from "react";
// packages
import { Form as FinalForm } from "react-final-form";
import { FormApi } from "final-form";

// components
import { TextField, required, composeValidators } from "src/components/Input";

// Types
import { ContactFormProps, FormDataOptions } from "./Types";

// actions
import { sendEmail } from "./actions";

const INITIAL_VALUES: FormDataOptions = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm: FC<ContactFormProps> = () => {
  const onSubmitForm = async (
    values: FormDataOptions,
    form: FormApi<FormDataOptions, FormDataOptions>
  ) => {
    try {
      await sendEmail(values);
      form.restart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-8">
        <div className="rounded-lg px-10 py-8 md:px-0">
          <h2 className="mb-8 text-2xl font-semibold">Contact me directly</h2>
          <FinalForm
            onSubmit={onSubmitForm}
            initialValues={INITIAL_VALUES}
            render={({ handleSubmit, values, errors, submitting }) => {
              return (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <TextField
                    name="name"
                    label="Name"
                    required
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Name required")),
                    }}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    required
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Email required")),
                    }}
                  />
                  <TextField
                    name="subject"
                    label="Subject"
                    required
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Subject required")),
                    }}
                  />
                  <TextField
                    name="message"
                    label="Message"
                    required
                    multiline
                    rows={5}
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Message required")),
                    }}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Submit
                  </button>
                </form>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Exports
export * from "./Types";
export default ContactForm;
