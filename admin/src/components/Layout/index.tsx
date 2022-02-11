import { Container, Header, Content, Footer, Sidebar, Sidenav, Nav, Dropdown, Navbar } from 'rsuite';
import { Pin, Page, Media } from '@rsuite/icons';
import { forwardRef, useState } from "react";
import Link from 'next/link'

// TODO
const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

// TODO
const iconStyles = {
    width: 56,
    height: 56,
    padding: 18,
    lineHeight: '56px',
    textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? "L" : "R"}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

const MyLink = forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return (
        <Link href={href} as={as}>
            <a ref={ref} {...rest} />
        </Link>
    );
});

export default function Layout({ children }) {
    const [expand, setExpand] = useState(true);
    return (
        <Container>
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column' }}
                width={expand ? 260 : 56}
                collapsible
            >
                <Sidenav>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item
                                eventKey="1"
                                href='/'>
                                Dashboard
                            </Nav.Item>
                            <Dropdown eventKey="2" title="Posts" icon={<Pin />}>
                                <Dropdown.Item as={MyLink} eventKey="2-1" href="/articles">
                                    All Articles
                                </Dropdown.Item>
                                {/* <Dropdown.Item as={MyLink} eventKey="2-2" href="/posts/create">
                                    Add New
                                </Dropdown.Item>
                                <Dropdown.Item as={MyLink} eventKey="2-3" href="/categories/edit">
                                    Categories
                                </Dropdown.Item>
                                <Dropdown.Item as={MyLink} eventKey="2-4" href="/tags/edit">
                                    Tags
                                </Dropdown.Item> */}
                            </Dropdown>
                            <Dropdown eventKey="4" title="Pages" icon={<Page />}>
                                <Dropdown.Item as={MyLink} eventKey="4-1" href="/pages">
                                    All Pages
                                </Dropdown.Item>
                                {/* <Dropdown.Item as={MyLink} eventKey="4-2" href="/pages/create">
                                    Add New
                                </Dropdown.Item> */}
                            </Dropdown>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
                <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
            </Sidebar>
            <Container>
                {children}
            </Container>
        </Container >
    )
}
