"use client";
// @mui
import { Box, Typography, Button } from "@mui/material";
// packages
import { Form as FinalForm } from "react-final-form";

// components
import {
  TextField,
  required,
  composeValidators,
  minLength,
  maxLength,
} from "src/components/Input";

// Types
import { FormDataOptions } from "./Types";

const ContactForm = () => {
  const onSubmitForm = (values: FormDataOptions) => {};

  const INITIAL_VALUES: FormDataOptions = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  return (
    <Box>
      <Typography variant="h4">Contact me</Typography>
      <FinalForm
        onSubmit={onSubmitForm}
        initialValues={INITIAL_VALUES}
        render={({ handleSubmit, values, errors, submitting }) => {
          console.log("values", values);
          return (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                required
                fieldProps={{
                  validate: composeValidators(required("Name is required")),
                }}
              />
              <Button type="submit" disabled={submitting}>
                Submit
              </Button>
            </form>
          );
        }}
      />
    </Box>
  );
};

export default ContactForm;
