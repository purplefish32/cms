import { useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import router from "next/router";
import { useAuth } from "../lib/auth";

export default function Login() {
    const { signIn } = useAuth()

    /*
        useEffect(() => {
            effect
            return () => {
                cleanup
            }
        }, [input])(() => {
            register("title", { required: true });
            register("slug", { required: true, pattern: /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/ });
            register("body");
            register("excerpt");
        }, []);
    */
    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors }
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = async (data) => {
        const { email, password } = data

        try {
            console.log("Login Action");
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            })

            const json = await response.json()

            if (json.jwt_token) {
                console.log(json);
                signIn({ email, password })
                router.push("/");
            }

        } catch (e) {
            console.log(e);
        }

    };

    const handleChange = (e) => {
        e.persist();
        setValue(e.target.name, e.target.value);
        trigger(e.target.name);
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
                        onBlur={handleChange}
                        error={
                            errors.type ? {
                                content: "Email is required",
                                pointing: 'below',

                            } : false
                        }
                    />

                </Form.Field>
                <Form.Field>
                    <Form.Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        label="Password"
                        onBlur={handleChange}
                    />

                </Form.Field>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

