import Admin from '../containers/Admin/Admin';
import AdminContactPage from '../containers/Admin/AdminContactPage/AdminContactPage';
import Login from '../containers/Login/Login';
import Page404 from '../containers/Page404/Page404';
import { PATH_NAME } from '../utils';

const routes = [
    { path: PATH_NAME.LOGIN, component: () => <Login /> },
    { path: PATH_NAME.ADMIN, component: () => <Admin /> },
    { path: PATH_NAME.ADMIN_CONTACT_PAGE, component: () => <AdminContactPage /> },
    { path: PATH_NAME.NOT_FOUND, component: () => <Page404 /> },
];

export default routes;