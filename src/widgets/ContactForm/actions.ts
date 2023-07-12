"use server";
import nodemailer from "nodemailer";

import { FormDataOptions } from "./Types";

const user = process.env.NODEMAILER_USER;
const pass = process.env.NODEMAILER_PASSWORD;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: FormDataOptions) {
  try {
    await transport.sendMail({
      from: user,
      to: user,
      subject: `ariful.io | ${subject}`,
      text: message,
      html: `<h3>${name}</h3><p>${email}</p><p>${message}</p>`,
    });
  } catch (error) {
    console.error(error);
  }
}
