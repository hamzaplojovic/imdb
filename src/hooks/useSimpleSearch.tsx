import axios from "axios";
import { useEffect, useState } from "react";

interface useSearchInterface {
    title: string;
}

export const useSearch = (props: useSearchInterface) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://imdb-api.com/en/API/Search/k_4sewq6nu/${props.title}`)
            .then((r) => {
                setData(r.data);
            });
    }, [props.title]);
    return { data };
};
