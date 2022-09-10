import { Button } from "@mantine/core";
import { useSearch } from "../../../hooks/useAdvancedSearch";

type SearchObject = {
    Title: string;
    Genre: string;
    Company: string;
    TitleType: string;
    TitleGroup: string;
};

interface AdvancedSearchButtonInterface {
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
    data: SearchObject;
}

export const AdvancedSearchButton = (props: AdvancedSearchButtonInterface) => {
    const data: any = useSearch({ ...props.data });
    // console.log(data);
    // console.log(props.data);
    return <Button>Search</Button>;
};
