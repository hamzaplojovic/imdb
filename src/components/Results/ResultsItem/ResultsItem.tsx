import { Card, Image, Text, Group } from "@mantine/core";
import { MediaQuery } from "@mantine/core";
import { useStyles } from "./ResultsItemStyles";

interface ResultsCardInterface {
    data: any;
}

export function ResultsCard(props: ResultsCardInterface) {
    const { classes } = useStyles();
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
                        {props.data.title}
                    </Text>
                </Group>
                <Group position="apart" mt="md" mb="xs">
                    <Text size="xs" color="dimmed">
                        {props.data.description}
                    </Text>
                </Group>
            </Card>
        </MediaQuery>
    );
}
