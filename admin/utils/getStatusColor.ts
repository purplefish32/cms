import { SemanticCOLORS } from "semantic-ui-react";
import { PostStatusEnum } from "../generated/graphql";

export default function getStatusColor(postStatus: PostStatusEnum): SemanticCOLORS {
    switch (postStatus) {
        case 'published':
            return 'green';
        case 'draft':
            return 'yellow';
        case 'archived':
            return 'grey';
        default:
            return 'yellow';
    }
}