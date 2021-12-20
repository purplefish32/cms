import React, { createElement } from 'react';
import Link from 'next/link'

export function ProductItem({ hit, components }) {
    return (
        <div className="aa-ItemContent">
            <div className="aa-ItemTitle">
                <components.Highlight hit={hit} attribute="id" />
            </div>
        </div>
    );
}