import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    article: {
        width: "35%",
        margin: "5% 5%",
        transition: "all 0.2s ease-in",
        boxShadow: theme.shadows.sm,
        borderRadius: theme.radius.md,
    },
}));
