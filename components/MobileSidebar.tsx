// @ts-nocheck
import React from 'react'

import {Link} from "react-router";
import pkg from "@syncfusion/ej2-react-navigations";
import NavItems from "./NavItems/NavItems";

const {SidebarComponent} = pkg;
const MobileSidebar = () => {

    let sidebar: SidebarComponent;
    console.log('side',sidebar)

    const toggleSidebar = () => {
        sidebar.toggle()
    }
    return (
        <div className='mobile-sidebar wrapper'>
            <header>
                <Link to='/'>
                    <img src="/assets/icons/logo.svg" alt="Logo" className='size-[30px]'/>
                    <h1>Tourvisto</h1>
                </Link>
                <button onClick={() => {
                    console.log('clicked');

                    sidebar.toggle()
                }}>
                    <img src="/assets/icons/menu.svg" alt="Menu Icon" className='size-7'/>
                </button>
            </header>
            <SidebarComponent
                width={270}
                created={() => sidebar.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type="over"
                enableGestures={false}
                ref={(Sidebar) => sidebar = Sidebar}>
                <NavItems handleClick={toggleSidebar}/>
            </SidebarComponent>
        </div>
    )
}
export default MobileSidebar
