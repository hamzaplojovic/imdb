import { Button, Space } from "@mantine/core";
import { useState } from "react";
import { useStyles } from "../SimpleSearch/SearchStyles";
import { AdvancedSearchInputs } from "./AdvancedSearchInputs";
import { AdvancedSearchButton } from "./AdvancedSearchButtton";

interface AdvancedSearchInterface {
    goBack: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdvancedSearch = (props: AdvancedSearchInterface) => {
    const { classes } = useStyles();
    const [data, setData] = useState({
        Title: "",
        Genre: "",
        Company: "",
        TitleType: "",
        TitleGroup: "",
    });
    const [click, setClick] = useState(false);
    const handleClick = () => {
        props.goBack(false);
    };
    return (
        <div className={classes.advancedwrapper}>
            <Button className={classes.button} onClick={handleClick}>
                Simple Search
            </Button>
            <Space h={55} />
            <AdvancedSearchInputs data={data} setData={setData} />
            <Space h={25} />
            <AdvancedSearchButton setClick={setClick} data={data} />
        </div>
    );
};
