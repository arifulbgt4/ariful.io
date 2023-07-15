"use client";
// React
import { FC } from "react";
// @mui
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
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
    <Grid container>
      <Grid item xs={12} md={8}>
        <Box
          sx={(theme) => ({
            px: 5,
            py: 4,
            borderRadius: 2,
            [theme.breakpoints.down("md")]: {
              px: 0,
            },
          })}
        >
          <Typography variant="h5" sx={{ mb: 4 }}>
            Contact me directly
          </Typography>
          <FinalForm
            onSubmit={onSubmitForm}
            initialValues={INITIAL_VALUES}
            render={({ handleSubmit, values, errors, submitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="name"
                    label="Name"
                    required
                    size="small"
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Name required")),
                    }}
                    sx={{
                      mb: 2.5,
                    }}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    required
                    size="small"
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Email required")),
                    }}
                    sx={{
                      mb: 2.5,
                    }}
                  />
                  <TextField
                    name="subject"
                    label="Subject"
                    required
                    size="small"
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Subject required")),
                    }}
                    sx={{
                      mb: 2.5,
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
                      validate: composeValidators(required("Message required")),
                    }}
                    sx={{
                      mb: 3,
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="info"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </form>
              );
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

// Exports
export * from "./Types";
export default ContactForm;
