import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Contex/index.jsx";
import {ShoppingBagIcon} from '@heroicons/react/24/solid'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext);

    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (isUserSignOut) {
            return (
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) => isActive ? activeStyle : undefined }
                        onClick={() => handleSignOut()}>
                        Sign out
                    </NavLink>
                </li>
            )
        } else {
            return (
                <>
                    <li className='text-black/60'>
                        teff@platzi.com
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-account'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => handleSignOut()}>
                            Sign out
                        </NavLink>
                    </li>
                </>
            )
        }
    }

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
                        to='/sign-in'
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=> handleSignOut()}>
                        Sign Out
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                {renderView()}
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };