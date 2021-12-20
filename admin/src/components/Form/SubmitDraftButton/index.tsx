import { Check, Page } from "@rsuite/icons";
import { Button } from "rsuite";

type Props = {
    handleClick: Function,
    loading: boolean,
    state?: string,
    disabled?: boolean
    saved?: boolean
}

const SubmitDraftButton = (props: Props) => {

    const { state, handleClick, loading, disabled, saved } = props;

    const getText = () => {
        if (state === "published") {
            return "Switch to draft"
        }

        if (state === "draft" && saved) {
            return <><Check /> Saved</>
        }

        return "Save draft"
    }


    return (
        <Button
            type="submit"
            onClick={() => handleClick()}
            loading={loading}
            disabled={disabled}
        >
            {getText()}
        </Button>
    );
};

export default SubmitDraftButton;


