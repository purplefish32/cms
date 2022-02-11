import { Schema } from 'rsuite';
import CreateArticleFormView from './CreateArticleFormView';

export interface CreateArticleFormModel {
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
    defaultValues: CreateArticleFormModel;
    onSubmit: (data: CreateArticleFormModel) => Promise<void>
}

const CreateArticleFormLogic = ({ defaultValues, onSubmit }: Props) => {
    const handleSubmit = async (data: CreateArticleFormModel) => {
        await onSubmit(data)
    };

    return (
        <CreateArticleFormView
            defaultValues={defaultValues}
            handleSubmit={handleSubmit}
            model={CreatePostFormSchema}
        />
    )
};

export default CreateArticleFormLogic;