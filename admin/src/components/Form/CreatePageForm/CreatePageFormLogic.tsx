import { Schema } from 'rsuite';
import CreatePageFormView from './CreatePageFormView';

export interface CreatePageFormModel {
    title: string;
    slug: string;
    body: string;
    state: string;
}

const { StringType } = Schema.Types;

const CreatePageFormSchema = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    slug: StringType().isRequired('This field is required.'), // TODO test slug unique
    body: StringType(),
});

interface Props {
    defaultValues: CreatePageFormModel;
    onSubmit: (data: CreatePageFormModel) => Promise<void>
}

const CreatePageFormLogic = ({ defaultValues, onSubmit }: Props) => {
    const handleSubmit = async (data: CreatePageFormModel) => {
        await onSubmit(data)
    };

    return (
        <CreatePageFormView
            defaultValues={defaultValues}
            handleSubmit={handleSubmit}
            model={CreatePageFormSchema}
        />
    )
};

export default CreatePageFormLogic;