import React from "react";
import SidebarRow from "./SidebarRow/SidebarRow";
import "./Sidebar.css";

import {
    Chat,
    EmojiFlags,
    ExpandMoreOutlined,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary
} from "@material-ui/icons";
import {useStateValue} from "../StateProvider/StateProvider";

function Sidebar() {
    const [{user}, dispatch]=useStateValue();
    return(
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title="Information Center"/>
            <SidebarRow Icon={EmojiFlags} title="Pages"/>
            <SidebarRow Icon={People} title="Friends"/>
            <SidebarRow Icon={Chat} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="Marketplace"/>
            <SidebarRow Icon={VideoLibrary} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar;