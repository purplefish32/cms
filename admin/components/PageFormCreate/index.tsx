import router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Message } from "semantic-ui-react";
import { PostTypesEnum, usePageFormCreateMutation } from "../../generated/graphql";

const PageFormCreate = () => {

    const [insert_posts_one, { loading, error }] = usePageFormCreateMutation();

    useEffect(() => {
        register("title", { required: true });
        register("slug", { required: true, pattern: /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/ });
        register("body");
        register("excerpt");
    }, []);

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
        const { title, slug, body, excerpt } = data;
        try {
            await insert_posts_one({
                variables: {
                    object: {
                        title,
                        slug,
                        body,
                        excerpt,
                        type: PostTypesEnum.Page
                    }
                }
            });
            router.push("/pages");
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} loading={loading} error={Boolean(error)}>
            <Form.Field>
                {error && (
                    <Message
                        error
                        icon="warning sign"
                        header='Error'
                        content={error.message}
                    />
                )}
                <Form.Input
                    name="title"
                    type="text"
                    placeholder="Title"
                    label="Title"
                    onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await trigger("name");
                    }}
                    error={
                        errors.type ? {
                            content: "Title is required",
                            pointing: 'below',

                        } : false
                    }
                />

            </Form.Field>
            <Form.Field>
                <Form.Input
                    name="slug"
                    type="text"
                    placeholder="Slug"
                    label="Slug"
                    onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await trigger("name");
                    }}
                    error={
                        errors.slug ? {
                            content: "Slug is invalid",
                            pointing: 'below',

                        } : false
                    }
                />

            </Form.Field>
            <Form.Field>
                <Form.TextArea
                    name="excerpt"
                    placeholder="Excerpt"
                    label="Excerpt"
                    onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await trigger("name");
                    }}
                />

            </Form.Field>
            <Form.Field>
                <Form.TextArea
                    name="body"
                    placeholder="Body"
                    label="Body"
                    onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await trigger("name");
                    }}
                />

            </Form.Field>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default PageFormCreate