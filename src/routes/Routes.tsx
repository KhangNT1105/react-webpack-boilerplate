import { Fragment } from 'react'
import { IRoutes } from './Routes.d'
import { Suspense } from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'
import { routesConfig } from './routesConfig'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Spinner from 'components/atoms/spinner/Spinner'
const renderRoutes = (routes: IRoutes[]) => {
  return (
    <>
      {routes && (
        <Suspense fallback={<Spinner />}>
          <Switch>
            {routes.map((route: IRoutes, idx: number) => {
              const Layout = route?.layout || Fragment
              const Page = route?.page || Fragment
              return (
                <Route
                  key={`routes-${idx}`}
                  path={route?.path}
                  exact={route?.exact}
                  render={(props: RouteProps) => (
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Page {...props} />
                      )}
                    </Layout>
                  )}
                />
              )
            })}
          </Switch>
        </Suspense>
      )}
    </>
  )
}

function Routes() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            {renderRoutes(routesConfig)}
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}

export default Routes
