import Link from 'next/link'
import { Menu, Sidebar } from 'semantic-ui-react';
import SearchBar from '../SearchBar';

const SidebarMenu = () => {

    return (
        <Sidebar
            as={Menu}
            visible
            inverted
            vertical
            animation='push'
            direction='left'
        >

            <Menu.Item>
                Posts
                <Menu.Menu>
                    <Menu.Item name='posts'>

                        <Link href="/posts">View posts</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Pages
                <Menu.Menu>
                    <Menu.Item name='pages'>

                        <Link href="/pages">View pages</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Sidebar>
    )
}

export default SidebarMenu