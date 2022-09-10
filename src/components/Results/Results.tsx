import { useSearch } from "../../hooks/useSimpleSearch";
import { ResultsCard } from "./ResultsItem/ResultsItem";

interface ResultsInterface {
    search: string;
}

export const Results = (props: ResultsInterface) => {
    const data: any = useSearch({ title: props.search });
    return (
        <>
            {data.data.results &&
                data.data.results.map((item: any) => {
                    return <ResultsCard key={item.id} data={item} />;
                })}
        </>
    );
};
