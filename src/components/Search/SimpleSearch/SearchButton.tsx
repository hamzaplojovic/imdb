import { Button } from "@mantine/core";
import { useStyles } from "./SearchStyles";
interface SearchButtonType {
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SearchButton = (props: SearchButtonType) => {
    const { classes } = useStyles();
    return (
        <Button
            className={classes.button}
            onClick={() => {
                props.setClick(true);
            }}
        >
            Search
        </Button>
    );
};
