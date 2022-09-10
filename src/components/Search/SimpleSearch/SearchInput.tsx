import { Input } from "@mantine/core";
import { useStyles } from "./SearchStyles";

interface SearchInputType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchInput = (props: SearchInputType) => {
    const { classes } = useStyles();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        props.setSearch(e.target.value);
        props.setClick(false);
    };
    return (
        <Input
            placeholder="Search"
            value={props.search}
            onChange={handleChange}
            className={classes.input}
        />
    );
};
