/* eslint-disable require-jsdoc */
import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import router from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../lib/auth";

export default function Login() {
  const { signIn, isSignedIn } = useAuth();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"), // TODO Zod
    },
  });

  useEffect(() => {
    if (isSignedIn()) {
      router.push("/");
    }
  }, [isSignedIn()]);

  return (
    <Container size={420} my={40}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const { email, password } = values;
          await signIn(email, password);
        })}
      >
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          JAHCMS Login
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="Your email"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
