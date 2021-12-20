import { Button } from "rsuite";

type Props = {
    handleClick: Function,
    loading: boolean,
    state?: string,
    disabled?: boolean,
    saved?: boolean
}

const SubmitPublishedButton = (props: Props) => {

    const { state, handleClick, loading, disabled } = props;

    const getText = () => {
        if (state === "published") {
            return "Update"
        }

        if (state === "draft") {
            return "Publish"
        }

        return "Publish"
    }

    return (
        <Button
            type="submit"
            appearance="primary"
            onClick={() => handleClick()}
            loading={loading}
            disabled={disabled}
        >
            {getText()}
        </Button>
    );
};

export default SubmitPublishedButton;


