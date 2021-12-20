import router from "next/router";
import { useRef, useState } from "react";
import { PostTypesEnum, useCreatePostMutation } from "../../../generated/graphql";
import { Form, Schema, Button, Message } from 'rsuite';

const PageFormCreate = () => {

    const [formValue, setFormValue] = useState({
        title: '',
        slug: '',
        body: ''
    });

    const { StringType } = Schema.Types;

    const model = Schema.Model({
        title: StringType().isRequired('This field is required.'),
        slug: StringType().isRequired('This field is required.'), // TODO test slug unique
        body: StringType(),
    });

    const formRef = useRef();

    const [formError, setFormError] = useState({});

    const [insert_posts_one, { loading, error }] = useCreatePostMutation()

    const handleSubmit = async () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }

        const { title, slug, body } = formValue

        try {
            await insert_posts_one({
                variables: {
                    object: {
                        title,
                        slug,
                        body,
                        type: PostTypesEnum.Page
                    }
                }
            });
            router.push("/pages")
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Form
            ref={formRef}
            onChange={formValue => {
                setFormValue(formValue)
            }}
            onCheck={setFormError}
            formValue={formValue}
            model={model}
            fluid
        >
            <Form.Group>
                {error && (
                    <Message
                        type="error"
                        showIcon
                        header='Error'
                    >
                        {error.message}
                    </Message>
                )}
                <Form.ControlLabel>Title</Form.ControlLabel>
                <Form.Control
                    name="title"
                    type="text"
                    placeholder="Title"
                />

            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>Slug</Form.ControlLabel>
                <Form.Control
                    checkAsync
                    name="slug"
                    type="text"
                    placeholder="Slug"
                    label="Slug"
                />

            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>Body</Form.ControlLabel>
                <Form.Control
                    name="body"
                    placeholder="Body"
                />
            </Form.Group>
            <Button type="submit" appearance="primary" onClick={handleSubmit} loading={loading}>Submit</Button>
        </Form >
    )
}

export default PageFormCreate