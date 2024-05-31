import Admin from '../containers/Admin/Admin';
import AdminAddMovie from '../containers/Admin/AdminAddMovie/AdminAddMovie';
import AdminContactPage from '../containers/Admin/AdminContactPage/AdminContactPage';
import AdminMovieList from '../containers/Admin/AdminMovieList/AdminMovieList';
import Login from '../containers/Login/Login';
import Page404 from '../containers/Page404/Page404';
import { PATH_NAME } from '../utils';

const routes = [
    { path: PATH_NAME.LOGIN, component: () => <Login /> },
    { path: PATH_NAME.ADMIN, component: () => <Admin /> },
    { path: PATH_NAME.ADMIN_CONTACT_PAGE, component: () => <AdminContactPage /> },
    { path: PATH_NAME.ADMIN_MOVIE_CREATE, component: () => <AdminAddMovie /> },
    { path: PATH_NAME.ADMIN_MOVIE_LIST, component: () => <AdminMovieList /> },
    { path: PATH_NAME.NOT_FOUND, component: () => <Page404 /> },
];

export default routes;