import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from '../utils/Routes'
import NavBar from './NavBar/NavBar'
import { MAIN_ROUTE, NN_ROUTE, NULL_ROUTE } from '../utils/consts'

function AppRouter() {
    return (
        <div>
            <NavBar />
            <Routes>
                {
                    publicRoutes.map(({ path, component }) => <Route key={path} path={path} Component={component} />)
                }
                <Route key={0} path='*' element={<Navigate replace to={NULL_ROUTE} />} />
                <Route key={1} path='/' element={<Navigate replace to={NN_ROUTE} />} />
            </Routes>
        </div>
    )
}

export default AppRouter