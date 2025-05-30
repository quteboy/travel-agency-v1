import React from "react";
import {Outlet,redirect} from "react-router";
import {NavItems, MobileSidebar} from "components";
import pkg from "@syncfusion/ej2-react-navigations";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";
const {SidebarComponent} = pkg;
// export async function clientLoader() {
//   try {
//     const user = await account.get();
//     if (!user.$id) return redirect("/sign-in");
//     const existingUser = await getExistingUser(user.$id)
//     if (existingUser?.status === 'user') {
//         return redirect('/')
//     }
//     return existingUser?.$id ? existingUser : await storeUserData()
//   } catch (err) {
//     console.log("Error in clientLoader", err);
//     return redirect('/sign-in')
//   }
// }
const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <MobileSidebar/>
            <aside className="w-full max-w-[270px] hidden lg:block">
                <SidebarComponent width={270} enableGestures={false}>
                    <NavItems/>
                </SidebarComponent>
            </aside>
            <aside className="children">
                <Outlet/>
            </aside>
        </div>
    );
};

export default AdminLayout;
