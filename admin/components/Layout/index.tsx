import SidebarMenu from "../SidebarMenu";
import { Container } from 'semantic-ui-react'
import router from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../lib/auth";
import Login from "../../pages/login";
import ClientOnly from "../ClientOnly";


export default function Layout({ children }) {
    return (
        <Container>
            <ClientOnly>
                <div>
                    <SidebarMenu></SidebarMenu>
                    {children}
                </div>
            </ClientOnly>
        </Container>
    )
}
