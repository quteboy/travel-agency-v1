import {cn} from "lib/utils";
import React from "react";
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";

const NavItems = ({handleClick}: { handleClick?: () => {} }) => {
    const userInfo = {
        name: 'Adrian',
        email: 'adrian@gmail.com',
        imgUrl: '/assets/images/david.webp',
    }
    return (
        <section className="nav-items">
            <Link to="/" className="link-logo">
                <img src="/assets/icons/logo.svg" alt="Logo" className="size-[30px]"/>
                <h1>Tourvisto</h1>
            </Link>
            <div className="container">
                <nav>
                    {sidebarItems.map((item, idx) => {
                        return (
                            <NavLink to={item.href} key={idx}>
                                {({isActive}: { isActive: boolean }) => (
                                    <div
                                        onClick={handleClick}
                                        className={cn("group nav-item", {
                                            "big-primary-100 !text-white": isActive,
                                        })}
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            className={`group-hover:brightness-0 size-0 group-hover:invert ${
                                                isActive ? "brightness-0 invert" : "text-dark-200"
                                            }`}
                                        />
                                        {item.label}
                                    </div>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>
                <footer className='nav-footer'>
                    <img src={userInfo?.imgUrl || '/assets/images/david.webp'} alt={userInfo?.name}/>
                    <article>
                        <h2>{userInfo?.name}</h2>
                        <p>{userInfo?.email}</p>
                    </article>
                    <button className='curson-pointer' onClick={() => {
                        console.log('i am clicked')
                    }}>
                        <img src="/assets/icons/logout.svg" alt="logout" className='size-6'/>
                    </button>
                </footer>
            </div>
        </section>
    );
};

export default NavItems;
