"use client";
// @mui
import {
  Box,
  Typography,
  FormControl,
  TextField as MuiTextField,
  Input,
  Button,
} from "@mui/material";
// packages
import { Form as FinalForm, Field, FormRenderProps } from "react-final-form";

// components
import { TextField, required } from "src/components/Input";

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
        render={({ handleSubmit, values, errors }) => {
          console.log("values", values);
          return (
            <form onSubmit={handleSubmit}>
              {/* <Field
                name="name"
                variants="dd"
                render={({ input, meta }) => {
                  console.log("input", input);
                  console.log("meta", meta);
                  return <TextField key={12} name={input.name} />;
                }}
              /> */}

              <TextField
                name="name"
                helperText="hey ff"
                fieldProps={{
                  validate: required("Name is required"),
                }}
              />
              <Button type="submit">Send email</Button>
            </form>
          );
        }}
      />
    </Box>
  );
};

export default ContactForm;
