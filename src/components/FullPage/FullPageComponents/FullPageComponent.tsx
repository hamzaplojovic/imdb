import { Image, Text, MediaQuery } from "@mantine/core";
import { useStyles } from "./FullPageStyles";
import { DynamicStar } from "react-dynamic-star";

export const FullPageComponent = (props: { data: any }) => {
    const { classes } = useStyles();
    console.log(props.data);
    return (
        <MediaQuery
            query="(max-width:1100px)"
            styles={{ flexDirection: "column" }}
        >
            <div className={classes.fullpage}>
                <Image
                    src={props.data.image}
                    width="60%"
                    radius={15}
                    className={classes.full_image}
                />

                <div className={classes.inner}>
                    <Text size={50} weight={500}>
                        "{props.data.fullTitle}"
                    </Text>
                    <Text weight={100}>Year: {props.data.year}</Text>
                    <Text weight={10}>Rank: {props.data.rank}</Text>

                    <Text weight={300} size={15}>
                        Crew: {props.data.crew}
                    </Text>

                    <DynamicStar
                        rating={props.data.imDbRating}
                        totalStars={10}
                        width={30}
                        emptyStarColor="grey"
                        height={30}
                    />
                </div>
            </div>
        </MediaQuery>
    );
};
