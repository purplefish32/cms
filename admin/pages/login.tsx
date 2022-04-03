import { useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import router from "next/router";
import { useAuth } from "../lib/auth";
import { useEffect } from "react";

export default function Login() {
  const { signIn } = useAuth();

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

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const json = await response.json();

      if (json.jwt_token) {
        console.log(json);
        signIn({ email, password });
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

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
