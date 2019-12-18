import React from 'react'
import Home from '../pages/home'
import Seances from '../pages/seances'
import Ajout from '../pages/seances/ajout'
import AjoutUser from '../pages/ajoutUser'
import AjoutUser2 from '../pages/ajoutUser/page2'
import TestModal from '../pages/PaulTests/modalTest'
import Administration from '../pages/administration'

const routes = {
    '/' : () => <Home />,
    '/seances' : () => <Seances />,
    '/seances/ajout' : () => <Ajout />,
    '/ajoutUser' : () => <AjoutUser />,
    '/ajoutUser/page2' : () => <AjoutUser2 />,
    '/modalTest' : () => <TestModal />,
    '/administration' : () =><Administration/>
}


export default routes;