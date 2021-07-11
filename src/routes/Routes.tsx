import React, { Fragment, Suspense } from 'react'
import { IRoutes } from './Routes.d'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom'
import { routesConfig } from './routesConfig'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Spinner from 'components/atoms/spinner/Spinner'
const renderRoutes: Function = (
  routes: IRoutes[],
  layout: React.FC | null = null
) => {
  return (
    <>
      {routes &&
        routes.map((route: IRoutes, idx: number) => {
          const Layout = layout || Fragment
          const Component = route?.page || Fragment
          console.log(route.exact, route.path)
          return route.routes && route.routes.length > 0 ? (
            renderRoutes(route.routes, route.layout)
          ) : route.redirect ? (
            <Redirect key={`redirect-${idx}`} to={route.redirect} />
          ) : (
            <Suspense fallback={<Spinner />}>
              <Route
                key={`routes-${route?.path || idx}`}
                path={route?.path}
                exact={route?.exact}
                render={(props: RouteProps) => (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                )}
              />
            </Suspense>
          )
        })}
    </>
  )
}

function Routes() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch>{renderRoutes(routesConfig)}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}

export default Routes
