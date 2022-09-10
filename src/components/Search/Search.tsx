import { Button } from "@mantine/core";
import { useState } from "react";
import { SimpleSearch } from "./SimpleSearch/SimpleSearch";
import { useStyles } from "./SimpleSearch/SearchStyles";
import { Layout } from "../Layout";
import { AdvancedSearch } from "./AdvancedSearch/AdvancedSearch";

export const Search = () => {
    const { classes } = useStyles();
    const [advanced, setAdvanced] = useState(false);
    const handleClick = () => {
        setAdvanced(true);
    };
    return (
        <Layout>
            {advanced === false ? (
                <div className={classes.search}>
                    <Button className={classes.advanced} onClick={handleClick}>
                        Advanced Search
                    </Button>
                    <SimpleSearch />
                </div>
            ) : (
                <div className={classes.search}>
                    <AdvancedSearch goBack={setAdvanced} />
                </div>
            )}
        </Layout>
    );
};
