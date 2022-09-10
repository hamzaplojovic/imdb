import { ImdbContext } from "../../../context/context";
import { useContext } from "react";
import { Top250Card } from "./Top250Card/Top250Card";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
}));
interface Top250ContextInterface {
    series: Top250ItemInterface[];
}

interface Top250ItemInterface {
    rank: any;
    title: any;
    year: any;
    image: any;
    imDbRating: any;
    fullTitle: any;
}

export const Top250SeriesWrapper = () => {
    const data: Top250ContextInterface = useContext(ImdbContext);
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            {data.series.map((item: Top250ItemInterface) => {
                return <Top250Card key={item.title} data={item} />;
            })}
        </div>
    );
};
