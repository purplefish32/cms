import router from "next/router";
import { useEffect, useRef, useState } from "react";
import { PostTypesEnum, usePageFormQuery, usePageFormUpdateMutation } from "../../generated/graphql";
import { Form, Schema, Button, Message } from 'rsuite';

type Props = {
    postId: string | string[];
}

const PageFormUpdate = (props: Props) => {

    const [formValue, setFormValue] = useState({
        title: '',
        slug: '',
        excerpt: '',
        body: ''
    });

    const { postId } = props;

    const { StringType } = Schema.Types;

    const model = Schema.Model({
        title: StringType().isRequired('This field is required.'),
        slug: StringType().isRequired('This field is required.'), // TODO test slug unique
        excerpt: StringType(),
        body: StringType(),
    });

    const formRef = useRef();

    const [formError, setFormError] = useState({});

    const {
        data: queryData,
        loading: queryLoading,
        error: queryError
    } = usePageFormQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            id: postId
        }
    });

    useEffect(() => {
        if (queryLoading === false && queryData) {

            const {
                title,
                slug,
                excerpt,
                body
            } = queryData.posts_by_pk

            setFormValue({
                title,
                slug,
                excerpt,
                body
            });
        }
    }, [queryLoading, queryData])

    const [update_posts_one, { loading: mutationLoading, error: mutationError }] = usePageFormUpdateMutation()

    const handleChange = (_value, event) => {
        setFormValue((formValue) => ({
            ...formValue, [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = async () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }

        const { title, slug, body, excerpt } = formValue

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
                        excerpt,
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
            onChange={handleChange}
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
                //defaultValue=""
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
                //defaultValue=""
                />

            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>Excerpt</Form.ControlLabel>
                <Form.Control
                    name="excerpt"
                    placeholder="Excerpt"
                //defaultValue=""
                />
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>Body</Form.ControlLabel>
                <Form.Control
                    name="body"
                    placeholder="Body"
                //defaultValue=""
                />
            </Form.Group>
            <Button type="submit" appearance="primary" onClick={handleSubmit} loading={mutationLoading}>Submit</Button>
        </Form >
    )
}

export default PageFormUpdate