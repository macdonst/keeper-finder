// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function LoginButton ({ html, state }) {
  const { store } = state
  const { account = null } = store
  const action = account ? '/auth/login' : '/auth/logout'
  const label = account ? 'Logout' : 'Login'
  return html`<a href="${action}">${label}</a>`
}

