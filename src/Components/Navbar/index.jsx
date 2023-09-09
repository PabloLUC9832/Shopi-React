import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Contex/index.jsx";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext);

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
                        to='/'
                        onClick={() => context.setSearchByCategory()}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furnitures')}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}>
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
                <li className="flex items-center">
                    <ShoppingCartIcon className="h-6 w-6 text-black"></ShoppingCartIcon>
                    <div>
                        { context.count }
                    </div>
                </li>
            </ul>

        </nav>
    );
}

export { Navbar };