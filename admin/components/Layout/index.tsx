import { Container, Header, Content, Footer, Sidebar, Sidenav, Nav, Dropdown, Navbar } from 'rsuite';
import { Pin, Page, Media } from '@rsuite/icons';
import { useState } from "react";
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
                            <Nav.Item eventKey="1">
                                <Link href="/">Dashboard</Link>
                            </Nav.Item>
                            <Dropdown eventKey="2" title="Posts" icon={<Pin />}>
                                <Dropdown.Item eventKey="2-1">
                                    <Link href="/posts">All Posts</Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2-2">
                                    <Link href="/posts/create">Add New</Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2-3">
                                    <Link href="/taxonomies/categories/edit">Categories</Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2-4">
                                    <Link href="/taxonomies/tags/edit">Tags</Link>
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown eventKey="3" title="Media" icon={<Media />}>
                                <Dropdown.Item eventKey="3-1">Library</Dropdown.Item>
                                <Dropdown.Item eventKey="3-2">Add New</Dropdown.Item>
                            </Dropdown>
                            <Dropdown eventKey="4" title="Pages" icon={<Page />}>
                                <Dropdown.Item eventKey="4-1">
                                    <Link href="/pages">All Pages</Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="4-2">
                                    <Link href="/pages/create">Add New</Link>
                                </Dropdown.Item>

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
