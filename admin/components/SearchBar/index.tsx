import React from 'react';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { Autocomplete } from './Autocomplete';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import { ProductItem } from './ProductItem';



const searchClient = instantMeiliSearch(
    "http://localhost:7700"
);

const SearchBar = () => (
    <Autocomplete
        openOnFocus={true}
        getSources={({ query }) => [
            {
                sourceId: 'users',
                getItems() {
                    return getAlgoliaResults({
                        searchClient,
                        queries: [
                            {
                                indexName: 'users',
                                query,
                            },
                        ],
                    });
                },
                templates: {
                    item({ item, components }) {
                        return <ProductItem hit={item} components={components} />;
                    },
                },
            },
        ]}
    />
);



export default SearchBar




