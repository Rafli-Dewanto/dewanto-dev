"use server";

import ContactFormEmail from "@/email/contact-form";
import { getErrorMessage } from "@/utils/get-error-message";
import { validateEmail } from "@/utils/validate-email";
import { validateMessage } from "@/utils/validate-message";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("email")?.valueOf().toString();
  const message = formData.get("message")?.valueOf().toString();

  if (!validateEmail(senderEmail, 500)) {
    return {
      error: ["invalid email"],
    };
  }

  if (!validateMessage(message, 5000)) {
    return {
      error: ["invalid message"],
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "raflidewanto97@gmail.com",
      subject: "New message from portfolio site",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
}
