import { Link } from "@inertiajs/react";
import {
    Button,
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
} from "flowbite-react";
import { useState } from "react";

export default function AppSideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sidebar>
            <SidebarItems>
                <SidebarItemGroup>
                    <SidebarItem href="/" as={Link}>
                        Home
                    </SidebarItem>
                    <SidebarItem href="/about" as={Link}>
                        About
                    </SidebarItem>
                    <Button
                        onClick={() => {
                            setIsOpen(!isOpen);
                            console.log("Sidebar toggled");
                        }}
                    >
                        Toggle Sidebar
                    </Button>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
}
