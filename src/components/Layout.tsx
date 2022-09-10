import { Space } from "@mantine/core";
import { NavbarMinimal } from "./Navbar/Navbar";

export const Layout = (props: { children: React.ReactNode }) => {
    return (
        <div>
            <NavbarMinimal />
            <Space h={30} />
            {props.children}
        </div>
    );
};
