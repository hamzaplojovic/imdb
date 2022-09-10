import axios from "axios";
import { useEffect, useState } from "react";

interface useSearchInterface {
    Title: string;
    Genre: string;
    Company: string;
    TitleType: string;
    TitleGroup: string;
}

export const useSearch = (props: useSearchInterface) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://imdb-api.com/API/AdvancedSearch/k_4sewq6nu?title="IT"&title_type=${props.TitleType}&genres=${props.Genre}&groups=${props.TitleGroup}&companies=${props.Company}`
            )
            .then((r) => {
                setData(r.data);
            });
    }, []);
    return { data };
};
