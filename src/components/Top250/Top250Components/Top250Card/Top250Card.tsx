import { Card, Image, Text, Button, Group } from "@mantine/core";
import { MediaQuery } from "@mantine/core";
import { useStyles } from "./Top250";
import { DynamicStar } from "react-dynamic-star";
import { useNavigate } from "react-router";

interface Top250CardInterface {
    data: any;
}

export function Top250Card(props: Top250CardInterface) {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/item", { state: { data: props } });
    };
    return (
        <MediaQuery
            query="(max-width:1000px)"
            styles={{ width: "80%", margin: "8% 5%" }}
        >
            <Card className={classes.article}>
                <Card.Section>
                    <Image src={props.data.image} height={400} fit="cover" />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={700} size={20} color="white">
                        {props.data.fullTitle}
                    </Text>
                    <Text weight={500} size="md" color="dimmed">
                        Rank: {props.data.rank}
                    </Text>
                </Group>
                <Group position="apart" mt="md" mb="xs">
                    <Text size="xs" color="dimmed">
                        Year: {props.data.year}
                    </Text>
                    <DynamicStar
                        rating={props.data.imDbRating}
                        totalStars={10}
                        emptyStarColor="grey"
                        width={15}
                        height={15}
                    />
                </Group>
                <Button
                    className={classes.button}
                    variant="light"
                    onClick={handleClick}
                >
                    Watch
                </Button>
            </Card>
        </MediaQuery>
    );
}
