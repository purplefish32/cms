import { useRef, useState } from "react";
import { PostStatesEnum, PostTypesEnum, useCreatePostMutation } from "../../../generated/graphql";
import { Form, Schema, Message, ButtonToolbar } from 'rsuite';
import { capitalize } from "underscore.string";
import SubmitDraftButton from "../Form/SubmitDraftButton";
import SubmitPublishedButton from "../Form/SubmitPublishedButton";
import router from "next/router";

const PostFormCreate = () => {

    const [formValue, setFormValue] = useState({
        title: '',
        slug: '',
        state: 'draft',
        excerpt: '',
        body: ''
    });

    const { StringType } = Schema.Types;

    const model = Schema.Model({
        title: StringType().isRequired('This field is required.'),
        slug: StringType().isRequired('This field is required.'), // TODO test slug unique
        excerpt: StringType(),
        body: StringType(),
    });

    const formRef = useRef();

    const [formError, setFormError] = useState({});

    const [insert_posts_one, { loading, error }] = useCreatePostMutation()

    const handleSubmitDraft = () => {
        setFormValue({ ...formValue, state: PostStatesEnum.Draft })
    }

    const handleSubmitPublished = () => {
        setFormValue({ ...formValue, state: PostStatesEnum.Published })
    }

    const handleSubmit = async () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }

        const { title, slug, state, body, excerpt } = formValue

        try {
            const { data } = await insert_posts_one({
                variables: {
                    object: {
                        title,
                        slug,
                        body,
                        excerpt,
                        state: PostStatesEnum[capitalize(state)],
                        type: PostTypesEnum.Post
                    }
                }
            });
            router.push(`/posts/edit/${data.insert_posts_one.id}`)

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
            onSubmit={handleSubmit}
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
                <Form.ControlLabel>Excerpt</Form.ControlLabel>
                <Form.Control
                    name="excerpt"
                    placeholder="Excerpt"
                />
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>Body</Form.ControlLabel>
                <Form.Control
                    name="body"
                    placeholder="Body"
                />
            </Form.Group>
            <ButtonToolbar>
                <SubmitDraftButton
                    loading={loading}
                    handleClick={handleSubmitDraft}
                />
                <SubmitPublishedButton
                    loading={loading}
                    handleClick={handleSubmitPublished}
                />
            </ButtonToolbar>
        </Form >
    )
}

export default PostFormCreate