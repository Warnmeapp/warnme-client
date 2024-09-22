import { getCurrentUser } from 'vuefire'

// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const user = await getCurrentUser()
  console.error('[DEBUG] user', user)

  if (to.path === '/auth' && user) {
    console.error('[DEBUG] Go to home')
    return navigateTo({
      path: '/'
    })
  }

  if (to.path !== '/auth' && !user) {
    console.error('[DEBUG] Go to auth')
    return navigateTo({
      path: '/auth',
      query: {
        redirect: to.fullPath
      }
    })
  }

  console.error('[DEBUG] You passed!')
})
