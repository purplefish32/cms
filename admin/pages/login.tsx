/* eslint-disable require-jsdoc */
import router from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import { useAuth } from "../src/hooks/use-auth";

export default function Login() {
  const { session, signInEmailPassword } = useAuth();

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;

    await signInEmailPassword(email, password);
  };

  useEffect(() => {
    if (session) {
      console.log(session);
      router.push("/");
    }
  }, [session]);

  return (
    <div>
      <h1 className={"text-4xl"}>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <Form.Input
            name="email"
            type="text"
            placeholder="Email"
            label="Email"
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await trigger(e.target.name);
            }}
            error={errors.email ? true : false}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await trigger(e.target.name);
            }}
            error={errors.password ? true : false}
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}
