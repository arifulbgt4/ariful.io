"use client";
// @mui
import { Box, Typography, Button, Grid } from "@mui/material";
// packages
import { Form as FinalForm } from "react-final-form";

// components
import { TextField, required, composeValidators } from "src/components/Input";

// Types
import { FormDataOptions } from "./Types";

const INITIAL_VALUES: FormDataOptions = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const onSubmitForm = async (values: FormDataOptions) => {};

  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Contact me directly
        </Typography>
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
                  size="small"
                  fullWidth
                  fieldProps={{
                    validate: composeValidators(required("Name is required")),
                  }}
                  sx={{
                    mb: 2,
                  }}
                />
                <TextField
                  name="email"
                  label="Email"
                  required
                  size="small"
                  fullWidth
                  fieldProps={{
                    validate: composeValidators(required("Name is required")),
                  }}
                  sx={{
                    mb: 2,
                  }}
                />
                <TextField
                  name="subject"
                  label="Subject"
                  required
                  size="small"
                  fullWidth
                  fieldProps={{
                    validate: composeValidators(required("Name is required")),
                  }}
                  sx={{
                    mb: 2,
                  }}
                />
                <TextField
                  name="message"
                  label="Message"
                  required
                  size="small"
                  multiline
                  rows={5}
                  fullWidth
                  fieldProps={{
                    validate: composeValidators(required("Name is required")),
                  }}
                  sx={{
                    mb: 3,
                  }}
                />

                <Button type="submit" variant="contained" disabled={submitting}>
                  Submit
                </Button>
              </form>
            );
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ContactForm;
