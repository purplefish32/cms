import SidebarMenu from "../SidebarMenu";
import { Container } from 'semantic-ui-react'
import SearchBar from "../SearchBar";


export default function Layout({ children }) {
    return (
        <Container>
            <SidebarMenu></SidebarMenu>
            {children}
        </Container>
    )
}