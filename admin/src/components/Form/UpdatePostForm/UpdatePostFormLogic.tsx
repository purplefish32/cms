import { Schema } from 'rsuite';
import UpdatePostFormView from './UpdatePostFormView';

export interface UpdatePostFormModel {
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
    defaultValues: UpdatePostFormModel;
    onSubmit: (data: UpdatePostFormModel) => Promise<void>
}

const UpdatePostFormLogic = ({ defaultValues, onSubmit }: Props) => {
    const handleSubmit = async (data: UpdatePostFormModel) => {
        await onSubmit(data)
    };

    return (
        <UpdatePostFormView
            defaultValues={defaultValues}
            handleSubmit={handleSubmit}
            model={UpdatePostFormSchema}
        />
    )
};

export default UpdatePostFormLogic;