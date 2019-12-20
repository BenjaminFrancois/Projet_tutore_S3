import React from 'react'
import Home from '../pages/home'
import Userprofile from '../pages/userProfil/_index'
import Password from '../pages/home/passwordForget'
import Seances from '../pages/event'
import AddEvent from '../pages/event/addEvent'
import AddUser from '../pages/admin/users/addUser'
import AddUserPage2 from '../pages/admin/users/addUser/step2'
import Administration from '../pages/admin'
import EditGroup from '../pages/admin/group'
import GererUtilisateur from '../pages/admin/users'
import EditModule from '../pages/admin/module'
import Options from '../pages/options'
import AddSession from '../pages/addSession'
import Test from '../pages/test'
import PasswordReset from "../pages/home/passwordReset";
import ViewsSession from '../pages/event/view/index'


import ProtectedRoute from '../utils/protectedRoute'
import ProtectedRouteAdmin from '../utils/protectedRouteAdmin';

const routes = {
    '/' : () => <Home />,
    '/passwordForget' : () => <Password />,
    '/passwordReset/:token' : (token) => <PasswordReset token={token} />,
    '/test' : () => <Test />,
    '/options' : () => <Options />,
    '/seances' : () => <Seances />,
    '/seances/addEvent' : () => <AddEvent />,
    '/administration/utilisateurs/ajout/etape1' : () => <AddUser />,
    '/administration/utilisateurs/ajout/etape2' : () => <AddUserPage2 />,
    '/administration' : () => <ProtectedRoute><ProtectedRouteAdmin> <Administration /> </ProtectedRouteAdmin></ProtectedRoute>,
    '/administration/editModule' : () => <EditModule />,
    '/administration/utilisateurs' : () =><GererUtilisateur/>,
    '/userProfil' : () => <Userprofile/>,
    '/administration/groupe' : () => <EditGroup />,
    '/seances/ajoutSeance': () => <AddSession />,
    '/seance/:seanceId'  : (seanceId) => <ViewsSession seanceId={seanceId}  />
};

export default routes;