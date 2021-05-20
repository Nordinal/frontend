import { useState } from 'react';
import { Route } from 'react-router';
import s from './Admin.module.css'
import MenuAdmin from './menu/MenuAdmin';
import RequestContainer from './request/RequestContainer';


const Admin = () => {
    return(
        <div className={s.container}>
            <div>
                <Route exact path="/auth/admin/" render={() => <MenuAdmin />} />
                <Route path="/auth/admin/request" render={() => <RequestContainer />} />
            </div>
        </div>
    )
}

export default Admin;