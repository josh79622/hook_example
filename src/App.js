import React from 'react';
import './App.css';
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import Home from './Home'
import WhatIsReactPage from './WhatIsReactPage'
import FunctionalComponentPage from './FunctionalComponentPage'
import UseStatePage from './UseStatePage'
import UseEffectPage from './UseEffectPage'
import UseContextPage from './UseContextPage'
import UseReducerPage from './UseReducerPage'
import PureComponentPage from './PureComponentPage'
import UseCallbackPage from './UseCallbackPage'
import UseMemoPage from './UseMemoPage'
import CustomHookPage from './CustomHookPage'
import { connect } from './store'

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Hooks
        {props.title ? ` - ${props.title}` : ''}
      </header>
      <main>
        <aside>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/whatIsReact'>what is React?</Link></p>
          <p><Link to='/functionalComponent'>functional component</Link></p>
          <p><Link to='/useState'>useState</Link></p>
          <p><Link to='/useEffect'>useEffect</Link></p>
          <p><Link to='/useContext'>useContext</Link></p>
          <p><Link to='/useReducer'>useReducer</Link></p>
          <p><Link to='/pureComponent'>pure component</Link></p>
          <p><Link to='/useCallback'>useCallback</Link></p>
          <p><Link to='/useMemo'>useMemo</Link></p>
          <p><Link to='/customHook'>custom hook</Link></p>
        </aside>
        <section>
          <Switch>
            <Route exact={true} path="/" render={(routeProps) => <Home {...routeProps} {...props}/>}/>
            <Route path="/useState" render={(routeProps) => <UseStatePage {...routeProps} {...props}/>}/>
            <Route path="/whatIsReact" render={(routeProps) => <WhatIsReactPage {...routeProps} {...props}/>}/>
            <Route path="/functionalComponent" render={(routeProps) => <FunctionalComponentPage {...routeProps} {...props}/>}/>
            <Route path="/useEffect" render={(routeProps) => <UseEffectPage {...routeProps} {...props}/>}/>
            <Route path="/useContext" render={(routeProps) => <UseContextPage {...routeProps} {...props}/>}/>
            <Route path="/useReducer" render={(routeProps) => <UseReducerPage {...routeProps} {...props}/>}/>
            <Route path="/pureComponent" render={(routeProps) => <PureComponentPage {...routeProps} {...props}/>}/>
            <Route path="/useCallback" render={(routeProps) => <UseCallbackPage {...routeProps} {...props}/>}/>
            <Route path="/useMemo" render={(routeProps) => <UseMemoPage {...routeProps} {...props}/>}/>
            <Route path="/customHook" render={(routeProps) => <CustomHookPage {...routeProps} {...props}/>}/>

          </Switch>
        </section>
      </main>
    </div>
  );
}

export default withRouter(App);
// export default withRouter(connect(App));
