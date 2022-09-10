import { useStyles } from "./SearchStyles";
import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";
import { useState } from "react";
import { Results } from "../../Results/Results";


export const SimpleSearch = () => {
    const { classes } = useStyles();
    const [search, setSearch] = useState("");
    const [click, setClick] = useState(false);
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <SearchInput
                    setClick={setClick}
                    search={search}
                    setSearch={setSearch}
                />
                <SearchButton setClick={setClick} />
            </div>
            <div className={classes.results}>
                {click === true && <Results search={search} />}
            </div>
        </div>
    );
};
