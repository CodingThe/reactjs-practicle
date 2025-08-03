import { Outlet, Link, Router,  } from "react-router-dom";

export default function Dashboard(){
    return(<>
        <h1>
            dashboard routes
            <Router>
                <nav>
                    <Link to='/profile'> Profile</Link>
                    <Link to='/setting'> Setting</Link>
                </nav>
                <Outlet/>

            </Router>
        </h1>
    </>)
}