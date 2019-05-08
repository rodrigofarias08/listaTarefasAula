import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Tarefas from '../tarefas/Tarefas'
import Sobre from '../sobre/Sobre'

export default props => {
    return ( 
        <Switch>
            <Route path='/tarefas' component={Tarefas} />
            <Route path='/sobre' component={Sobre} />
            <Redirect from='*' to='/tarefas' />
        </Switch>
    );
}