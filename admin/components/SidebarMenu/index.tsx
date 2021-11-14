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
                Home
                <Menu.Menu>
                    <Menu.Item name='home'>
                        <Link href="/">Home</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Stats
                <Menu.Menu>
                    <Menu.Item name='stats'>
                        <Link href="/stats">All Stats</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Pages
                <Menu.Menu>
                    <Menu.Item name='pages'>
                        <Link href="/pages">All Pages</Link>
                    </Menu.Item>
                    <Menu.Item name='pagesCreate'>
                        <Link href="/pages/create">Add New</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Posts
                <Menu.Menu>
                    <Menu.Item name='posts'>
                        <Link href="/posts">All Posts</Link>
                    </Menu.Item>
                    <Menu.Item name='postsCreate'>
                        <Link href="/posts/create">Add New</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Comments
                <Menu.Menu>
                    <Menu.Item name='comments'>
                        <Link href="/comments">All Comments</Link>
                    </Menu.Item>
                    <Menu.Item name='commentCreate'>
                        <Link href="/comments/create">Add New</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Categories
                <Menu.Menu>
                    <Menu.Item name='categories'>
                        <Link href="/categories">All Categories</Link>
                    </Menu.Item>
                    <Menu.Item name='categoriesCreate'>
                        <Link href="/categories/create">Add New</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Media
                <Menu.Menu>
                    <Menu.Item name='media'>
                        <Link href="/media">All Media</Link>
                    </Menu.Item>
                    <Menu.Item name='mediaCreate'>
                        <Link href="/media/create">Add New</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Users
                <Menu.Menu>
                    <Menu.Item name='users'>
                        <Link href="/users">All Users</Link>
                    </Menu.Item>
                    <Menu.Item name='usersCreate'>
                        <Link href="/users/create">Add New</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Tools
                <Menu.Menu>
                    <Menu.Item name='tools'>
                        <Link href="/tools">All Tools</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Sidebar>
    )
}

export default SidebarMenu