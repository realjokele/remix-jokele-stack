import type { DefineRouteFunction, DefineRoutesFunction } from '@remix-run/dev/dist/config/routes'

export function configureRoutes(defineRoutes: DefineRoutesFunction) {
  return defineRoutes((route) => {
    // route('*', 'routes/_app.$.tsx')

    // authRoutes(route)

    route('', 'routes/_layout.tsx', () => {
      route('', 'routes/_index.route.tsx', { index: true })

      //   adminRoutes(route)
    })
  })
}

// function adminRoutes(route: DefineRouteFunction) {
//   route('/admin', 'routes/admin/_layout.tsx', () => {
//     route('', 'routes/admin/_index.route.tsx', { index: true })
//     route('permissions', 'routes/admin/permissions/permissions.route.tsx')
//     route('roles', 'routes/admin/roles/roles.route.tsx')
//     route('users', 'routes/admin/users/users.route.tsx')
//   })
// }

// function authRoutes(route: DefineRouteFunction) {
//   route('', 'routes/auth/_layout.tsx', () => {
//     route('login', 'routes/auth/login.route.tsx')
//     route('logout', 'routes/auth/logout.route.tsx')
//     route('forgot-password', 'routes/auth/forgot-password.route.tsx')
//     route('verify', 'routes/auth/verify.route.tsx')
//     route('reset-password', 'routes/auth/reset-password.route.tsx')
//     route('password-changed', 'routes/auth/password-changed.route.tsx')
//   })
// }
