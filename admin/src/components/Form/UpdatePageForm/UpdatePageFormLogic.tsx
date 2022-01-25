import { Schema } from 'rsuite';
import UpdatePageFormView from './UpdatePageFormView';

export interface UpdatePageFormModel {
    title: string;
    slug: string;
    body: string;
    state: string;
}

const { StringType } = Schema.Types;

const UpdatePageFormSchema = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    slug: StringType().isRequired('This field is required.'), // TODO test slug unique
    body: StringType(),
});

interface Props {
    defaultValues: UpdatePageFormModel;
    onSubmit: (data: UpdatePageFormModel) => Promise<void>
}

const UpdatePageFormLogic = ({ defaultValues, onSubmit }: Props) => {
    const handleSubmit = async (data: UpdatePageFormModel) => {
        await onSubmit(data)
    };

    return (
        <UpdatePageFormView
            defaultValues={defaultValues}
            handleSubmit={handleSubmit}
            model={UpdatePageFormSchema}
        />
    )
};

export default UpdatePageFormLogic;