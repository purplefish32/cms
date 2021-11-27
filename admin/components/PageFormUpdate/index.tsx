import router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Message } from "semantic-ui-react";
import { PostTypesEnum, usePageFormUpdateMutation } from "../../generated/graphql";

interface Data {
    id: string;
    body?: string;
    slug: string;
    title: string;
    excerpt?: string;
}

const PageFormUpdate = (props: Data) => {

    const { id, body, slug, title, excerpt } = props

    const [update_posts_one, { loading, error }] = usePageFormUpdateMutation()

    useEffect(() => {
        register("title", { required: true });
        register("slug", { required: true, pattern: /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/ })
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
            await update_posts_one({
                variables: {
                    pk_columns: {
                        id
                    },
                    _set: {
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

    const handleChange = (e) => {
        e.persist();
        setValue(e.target.name, e.target.value);
        trigger(e.target.name);
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
                    onBlur={handleChange}
                    defaultValue={title}
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
                    onBlur={handleChange}
                    defaultValue={slug}
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
                    onBlur={handleChange}
                    defaultValue={excerpt}
                />

            </Form.Field>
            <Form.Field>
                <Form.TextArea
                    name="body"
                    placeholder="Body"
                    label="Body"
                    onBlur={handleChange}
                    defaultValue={body}
                />

            </Form.Field>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default PageFormUpdate