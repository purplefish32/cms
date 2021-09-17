import Link from 'next/link'
import { FiFile, FiFileText, FiLogOut, FiTag, FiUser } from "react-icons/fi";

const SidebarMenu = () => {
    return (
        <div className={"bg-gray-800 p-10 text-gray-200 text-sm"}>
            <ul>
                <li className={"block relative"}>
                    <FiFileText className={"inline"} /><Link href="/posts">Posts</Link>
                </li>
                <li className={"block relative"}>
                    <FiFile className={"inline"} /><Link href="/pages">Pages</Link>
                </li>
                <li className={"block relative"}>
                    <FiTag className={"inline"} /><Link href="/tags">Tags</Link>
                </li>
                <li className={"block relative"}>
                    <FiUser className={"inline"} /><Link href="/staff">Staff</Link>
                </li>
                <li className={"block relative"}>
                    <FiLogOut className={"inline"} /><Link href="/auth/login">Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarMenu