import router from 'next/router';
import { useRef, useState } from 'react';
import { Form, Button, Schema } from 'rsuite';
import { TaxonomiesEnum, useCreateTermMutation, useCreateTermTaxonomyMutation } from '../../../../generated/graphql';
import { namedOperations } from '../../../../types';
import TaxonomyFormGroupDescription from '../TaxonomyFormGroupDescription';
import TaxonomyFormGroupName from '../TaxonomyFormGroupName';
import TaxonomyFormGroupParent from '../TaxonomyFormGroupParent';
import TaxonomyFormGroupSlug from '../TaxonomyFormGroupSlug';

const CategoryFromCreate = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        slug: '',
        parent_slug: 'uncategorized',
        description: ''
    });

    const { StringType } = Schema.Types;

    const model = Schema.Model({
        name: StringType().isRequired('This field is required.'),
        slug: StringType().isRequired('This field is required.'), // TODO test slug unique
        parent: StringType(),
        description: StringType(),
    });

    const formRef = useRef();

    const [formError, setFormError] = useState({});

    const [insert_term_taxonomies, { data, loading, error }] = useCreateTermTaxonomyMutation({
        refetchQueries: [
            namedOperations.Query.termTaxonomies,
            namedOperations.Query.termTaxonomiesTree
        ]
    })

    const handleSubmit = async () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }

        const { name, slug, parent_slug, description } = formValue

        try {
            await insert_term_taxonomies({
                variables: {
                    objects: [
                        {
                            description,
                            taxonomy: TaxonomiesEnum.Categories,
                            parent_slug,
                            term: {
                                data: {
                                    name,
                                    slug
                                }
                            }
                        }
                    ]
                },

            });
        } catch (error) {
            console.log(error)
        }
    };

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
            <TaxonomyFormGroupName />
            <TaxonomyFormGroupSlug />
            <TaxonomyFormGroupParent />
            <TaxonomyFormGroupDescription />
            <Button type="submit" appearance="primary" onClick={handleSubmit} loading={loading}>Add Category</Button>
        </Form>

    )
}

export default CategoryFromCreate;