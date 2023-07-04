import { NavLink,Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className='layout'>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/create">Create Post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <Outlet/>
            </div>
            <footer>Geeks 2023</footer>
        </div>
    );
};

export default Layout;