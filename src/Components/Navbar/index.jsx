import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">

            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    pablo@mail.com
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/my-account'>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    Carrito
                </li>
            </ul>

        </nav>
    );
}

export { Navbar };