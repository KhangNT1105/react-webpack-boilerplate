import { Fragment } from 'react'
import { IRoutes } from './Routes.d'
import { Suspense } from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'
import { routesConfig } from './routesConfig'
const renderRoutes = (routes: IRoutes[]) => {
  return (
    <>
      {routes && (
        <Suspense fallback={<div />}>
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
  return renderRoutes(routesConfig)
}

export default Routes
