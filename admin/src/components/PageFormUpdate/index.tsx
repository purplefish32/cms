import router from "next/router";
import { useEffect, useRef, useState } from "react";
import { PostTypesEnum, usePostQuery, useUpdatePostMutation } from "../../../generated/graphql";
import { Form, Schema, Button, Message } from 'rsuite';

type Props = {
    postId: string | string[];
}

const PageFormUpdate = (props: Props) => {

    const [formValue, setFormValue] = useState({
        title: '',
        slug: '',
        body: ''
    });

    const { postId } = props;

    const { StringType } = Schema.Types;

    const model = Schema.Model({
        title: StringType().isRequired('This field is required.'),
        slug: StringType().isRequired('This field is required.'), // TODO test slug unique
        body: StringType(),
    });

    const formRef = useRef();

    const [formError, setFormError] = useState({});

    const {
        data: queryData,
        loading: queryLoading,
        error: queryError
    } = usePostQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            uuid: postId
        }
    });

    useEffect(() => {
        if (queryLoading === false && queryData) {

            const {
                title,
                slug,
                body
            } = queryData.posts_by_pk

            setFormValue({
                title,
                slug,
                body
            });
        }
    }, [queryLoading, queryData])

    const [update_posts_one, { loading: mutationLoading, error: mutationError }] = useUpdatePostMutation()

    const handleSubmit = async () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }

        const { title, slug, body } = formValue

        try {
            await update_posts_one({
                variables: {
                    pk_columns: {
                        id: postId
                    },
                    _set: {
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

    if (queryError) {
        return <div>Error loading page data.</div>;
    }

    if (!queryData) {
        return <div>Loading</div>;
    }

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
                {mutationError && (
                    <Message
                        type="error"
                        showIcon
                        header='Error'
                    >
                        {mutationError.message}
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
            <Button type="submit" appearance="primary" onClick={handleSubmit} loading={mutationLoading}>Submit</Button>
        </Form >
    )
}

export default PageFormUpdate