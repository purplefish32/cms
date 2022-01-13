import { Schema } from 'rsuite';
import CreatePostFormView from './CreatePostFormView';

export interface CreatePostFormModel {
    title: string;
    slug: string;
    body: string;
    state: string;
    excerpt: string;
}

const { StringType } = Schema.Types;

const CreatePostFormSchema = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    slug: StringType().isRequired('This field is required.'), // TODO test slug unique
    excerpt: StringType(),
    body: StringType(),
});

interface Props {
    defaultValues: CreatePostFormModel;
    onSubmit: (data: CreatePostFormModel) => Promise<void>
}

const CreatePostFormLogic = ({ defaultValues, onSubmit }: Props) => {
    const handleSubmit = async (data: CreatePostFormModel) => {
        await onSubmit(data)
    };

    return (
        <CreatePostFormView
            defaultValues={defaultValues}
            handleSubmit={handleSubmit}
            model={CreatePostFormSchema}
        />
    )
};

export default CreatePostFormLogic;