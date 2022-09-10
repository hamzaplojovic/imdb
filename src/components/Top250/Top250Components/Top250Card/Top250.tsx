import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    article: {
        width: "35%",
        margin: "5% 5%",
        transition: "all 0.2s ease-in",
        boxShadow: theme.shadows.sm,
        borderRadius: theme.radius.md,
    },
    button: {
        width: "100%",
        marginTop: "20px",
        transition: "all 0.35s ease",
        backgroundColor: theme.colors.gray[7],
        color: theme.white,

        "&:hover": {
            backgroundColor: theme.colors.gray[3],
            color: theme.black,
        },
    },
}));
