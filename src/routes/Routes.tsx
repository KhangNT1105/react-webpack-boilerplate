import React, { Fragment, Suspense } from 'react'
import { IRoutes } from './Routes.d'
import { RouteProps, Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { routesConfig } from './routesConfig'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Spinner from 'components/atoms/spinner/Spinner'
const renderRoutes: Function = (
  routes: IRoutes[],
  layout: React.FC | null = null
) => {
  return (
    routes &&
    routes.map((route: IRoutes, idx: number) => {
      const Layout = layout || Fragment
      const Component = route?.page || Fragment
      return route.routes && route.routes.length > 0 ? (
        renderRoutes(route.routes, route.layout)
      ) : (
        <Route path={route?.path} exact={route?.exact}>
          <Layout>
            <Component />
          </Layout>
        </Route>
      )
    })
  )
}

function Routes() {
  return (
    <Route
      render={({ location }) => (
        <Suspense fallback={<Spinner />}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch>{renderRoutes(routesConfig)}</Switch>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      )}
    />
  )
}

export default Routes
