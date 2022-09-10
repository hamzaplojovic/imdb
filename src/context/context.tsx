import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface ImdbContextInterface {
    children: React.ReactNode;
}

export const ImdbContext = createContext<any>(undefined);

export const ImdbContextProvider = (props: ImdbContextInterface) => {
    const [movies, setMovies] = useState<any>([]);
    const [series, setSeries] = useState<any>([]);

    useEffect(() => {
        axios.get("https://imdb.deta.dev/movies").then((r) => {
            setMovies(r.data);
        });
        axios.get("https://imdb.deta.dev/series").then((r) => {
            setSeries(r.data);
        });
    }, []);
    return (
        <ImdbContext.Provider value={{ movies, series }}>
            {props.children}
        </ImdbContext.Provider>
    );
};
