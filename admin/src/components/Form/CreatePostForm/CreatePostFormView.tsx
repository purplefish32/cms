import { useState } from "react";
import { Button, Form, InputPicker } from "rsuite";
import { Schema } from "schema-typed";
import { PostStatesEnum } from "../../../../generated/graphql";
import { CreatePostFormModel } from "./CreatePostFormLogic";

interface Props {
    model: Schema<{
        title: unknown;
        slug: unknown;
        excerpt: unknown;
        body: unknown;
    }, string>,
    defaultValues: CreatePostFormModel,
    handleSubmit: (data: CreatePostFormModel) => Promise<void>
}

const CreatePostFormView = ({ model, defaultValues, handleSubmit }: Props) => {
    const [formValue, setFormValue] = useState<CreatePostFormModel>(defaultValues);

    return (
        <Form
            onChange={formValue => {
                setFormValue(formValue as CreatePostFormModel)
            }}
            formValue={formValue}
            model={model}
            fluid
        >
            <Form.Group>
                <Form.Control
                    name="state"
                    accepter={InputPicker}
                    data={
                        [
                            {
                                "label": "Draft",
                                "value": PostStatesEnum.Draft
                            },
                            {
                                "label": "Published",
                                "value": PostStatesEnum.Published
                            },
                        ]
                    }
                />
            </Form.Group>
            <Form.Group>
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
            <Button
                type="submit"
                appearance="primary"
                onClick={() => {
                    handleSubmit(formValue)
                }}
            >
                Submit
            </Button>
        </Form>
    );
};

export default CreatePostFormView;