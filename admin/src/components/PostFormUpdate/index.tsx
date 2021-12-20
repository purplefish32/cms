import { useEffect, useRef, useState } from "react";
import { PostStatesEnum, PostTypesEnum, usePostQuery, useUpdatePostMutation } from "../../../generated/graphql";
import { Form, Schema, Message, ButtonToolbar } from 'rsuite';
import { capitalize } from 'underscore.string';
import SubmitDraftButton from "../Form/SubmitDraftButton";
import SubmitPublishedButton from "../Form/SubmitPublishedButton";

type Props = {
    postId: string | string[];
}

const PostFormUpdate = (props: Props) => {

    const initFormValue = {
        title: '',
        slug: '',
        state: '',
        excerpt: '',
        body: ''
    }

    const [saved, setSaved] = useState(true);

    const [formValue, setFormValue] = useState(initFormValue);

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
                state,
                excerpt,
                body
            } = queryData.posts_by_pk

            setFormValue({
                title,
                slug,
                state,
                excerpt,
                body
            });
        }
    }, [queryLoading, queryData])

    const [update_posts_one, { loading, error: mutationError }] = useUpdatePostMutation()

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
            await update_posts_one({
                variables: {
                    pk_columns: {
                        id: postId
                    },
                    _set: {
                        title,
                        slug,
                        state: PostStatesEnum[capitalize(state)],
                        body,
                        excerpt,
                        type: PostTypesEnum.Post
                    }
                }
            });
            setSaved(true)
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
                setSaved(false)
            }}
            onCheck={setFormError}
            onSubmit={handleSubmit}
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
                    loading={loading && formValue.state === "draft"}
                    handleClick={handleSubmitDraft}
                    state={formValue.state}
                    disabled={saved && formValue.state === "draft"}
                    saved={saved}
                />
                <SubmitPublishedButton
                    loading={loading && formValue.state === "published"}
                    handleClick={handleSubmitPublished}
                    state={formValue.state}
                    disabled={saved && formValue.state === "published"}
                    saved={saved}
                />
            </ButtonToolbar>
        </Form >
    )
}

export default PostFormUpdate