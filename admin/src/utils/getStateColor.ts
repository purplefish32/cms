import { SemanticCOLORS } from "semantic-ui-react";
import { PostStatesEnum } from "../../generated/graphql";

export default function getStateColor(postState: PostStatesEnum): SemanticCOLORS {
    switch (postState) {
        case PostStatesEnum.Published:
            return 'green';
        case PostStatesEnum.Draft:
            return 'yellow';
        case PostStatesEnum.Archived:
            return 'grey';
        default:
            return 'yellow';
    }
}