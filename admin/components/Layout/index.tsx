import SidebarMenu from "../SidebarMenu";

export default function Layout({ children }) {
    return (
        <div className={"flex"}>
            <div className={"flex-none w-500 h-1000"}>
                <SidebarMenu></SidebarMenu>
            </div>
            <div className={"flex-grow h-16"}>
                {children}
            </div>
        </div>
    )
}