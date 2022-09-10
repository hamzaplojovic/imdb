import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top250Movies } from "./Top250/Top250Movies";
import { Top250Series } from "./Top250/Top250Series";
import { FullPage } from "./FullPage/FullPage";
import { Search } from "./Search/Search";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top250Movies />} />
                <Route path="/series" element={<Top250Series />} />
                <Route path="/search" element={<Search />} />
                <Route path="/:id" element={<FullPage />} />
            </Routes>
        </BrowserRouter>
    );
};
