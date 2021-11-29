import SidebarMenu from "../SidebarMenu";
import { Container } from 'semantic-ui-react'

export default function Layout({ children }) {
    return (
        <Container>
            <div>
                <SidebarMenu></SidebarMenu>
                {children}
            </div>
        </Container>
    )
}
