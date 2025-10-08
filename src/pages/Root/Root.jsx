import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div data-theme="light">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;