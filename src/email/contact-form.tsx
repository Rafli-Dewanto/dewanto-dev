import React from "react";

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 !text-slate-950">
          <Container>
            <Section className="px-10 py-4 my-10 bg-white border-black/10 rounded-md">
              <Heading className="leading-tight">
                You&apos;ve received a new email from contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
