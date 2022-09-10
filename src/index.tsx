import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { App } from "./components/App";
import { ImdbContextProvider } from "./context/context";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <MantineProvider
            theme={{ colorScheme: "dark" }}
            withGlobalStyles
            withNormalizeCSS
        >
            <ImdbContextProvider>
                <App />
            </ImdbContextProvider>
        </MantineProvider>
    </React.StrictMode>
);
