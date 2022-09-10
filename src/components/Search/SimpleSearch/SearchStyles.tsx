import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params) => ({
    wrapper: {
        width: "100%",
        padding: "5% 10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    inner: {
        display: "flex",
        width: "70%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    button: {
        backgroundColor: theme.colors.dark[7],
        color: theme.colors.gray[5],
        border: "2px solid gray",
        transition: "all ease-in-out 0.25s",
        "&:hover": {
            backgroundColor: theme.colors.gray[6],
            color: theme.black,
        },
    },
    input: {
        width: "70%",
    },
    results: {
        margin: "5% 0%",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
    },
    search: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1% 0%",
    },
    advanced: {
        backgroundColor: theme.colors.dark[7],
        color: theme.colors.gray[5],
        width: "15%",
        border: "2px solid gray",
        transition: "all ease-in-out 0.25s",
        "&:hover": {
            backgroundColor: theme.colors.gray[6],
            color: theme.black,
        },
    },
    advancedinput: {
        width: "40%",
        margin: "1% 0%",
    },
    advancedwrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));
