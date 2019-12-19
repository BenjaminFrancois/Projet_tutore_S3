import React from 'react'
import Home from '../pages/home'
import Userprofil from '../pages/userProfil'
import Password from '../pages/home/passwordForget'
import Seances from '../pages/sessions'
import Ajout from '../pages/sessions/addSession'
import AddUser from '../pages/admin/users/addUser'
import AddUserPage2 from '../pages/admin/users/addUser/step2'
import Administration from '../pages/admin'
import EditGroup from '../pages/admin/group'
import GererUtilisateur from '../pages/admin/users'
import EditModule from '../pages/admin/module'
import Test from '../pages/test'

const routes = {
    '/' : () => <Home />,
    '/passwordForget' : () => <Password />,
    '/test' : () => <Test />,
    '/seances' : () => <Seances />,
    '/seances/ajout' : () => <Ajout />,
    '/administration/utilisateurs/ajout/etape1' : () => <AddUser />,
    '/administration/utilisateurs/ajout/etape2' : () => <AddUserPage2 />,
    '/administration' : () =><Administration />,
    '/administration/editModule' : () => <EditModule />,
    '/administration/utilisateurs' : () =><GererUtilisateur/>,
    '/userProfil' : () => <Userprofil/>,
    '/administration/utilisateurs' : () =><GererUtilisateur/>,
    '/administration/groupe' : () => <EditGroup />
};

export default routes;