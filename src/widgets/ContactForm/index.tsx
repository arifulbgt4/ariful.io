"use client";
// @mui
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
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
        <Box sx={{ px: 5, py: 4, borderRadius: 2 }}>
          <Typography variant="h5" sx={{ mb: 4 }}>
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

export default ContactForm;
