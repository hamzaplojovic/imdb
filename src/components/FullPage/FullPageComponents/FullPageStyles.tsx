import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params) => ({
    fullpage: {
        width: "100%",
        padding: "0% 10%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1%",
    },
    inner: {
        width: "55%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        justifyContent: "space-evenly",
        height: "450px",
        [`@media (max-width: 1100px)`]: {
            justifyContent: "space-evenly",
            width: "100%",
        },
    },
    full_image: {
        [`@media (max-width: 1100px)`]: {
            display: "none",
        },
    },
}));
