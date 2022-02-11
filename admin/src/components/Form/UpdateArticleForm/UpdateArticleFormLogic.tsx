import { Schema } from 'rsuite';
import UpdateArticleFormView from './UpdateArticleFormView';

export interface UpdateArticleFormModel {
    title: string;
    slug: string;
    body: string;
    state: string;
    excerpt: string;
}

const { StringType } = Schema.Types;

const UpdatePostFormSchema = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    slug: StringType().isRequired('This field is required.'), // TODO test slug unique
    excerpt: StringType(),
    body: StringType(),
});

interface Props {
    defaultValues: UpdateArticleFormModel;
    onSubmit: (data: UpdateArticleFormModel) => Promise<void>
}

const UpdatePostFormLogic = ({ defaultValues, onSubmit }: Props) => {
    const handleSubmit = async (data: UpdateArticleFormModel) => {
        await onSubmit(data)
    };

    return (
        <UpdateArticleFormView
            defaultValues={defaultValues}
            handleSubmit={handleSubmit}
            model={UpdatePostFormSchema}
        />
    )
};

export default UpdatePostFormLogic;