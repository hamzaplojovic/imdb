import { useLocation } from "react-router-dom";
import { FullPageComponent } from "./FullPageComponent";

export const FullPageWrapper = () => {
    const { state }: any = useLocation();
    return <FullPageComponent data={state.data.data} />;
};
