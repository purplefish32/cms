/* eslint-disable require-jsdoc */
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import router from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../src/hooks/use-auth";

export default function Login() {
  const { session, signInEmailPassword } = useAuth();

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
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <Container size={420} my={40}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const { email, password } = values;
          await signInEmailPassword(email, password);
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
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor<"a">
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()} // TODO
          >
            Create account
          </Anchor>
        </Text>

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
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<"a">
              onClick={(event) => event.preventDefault()} // TODO
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
