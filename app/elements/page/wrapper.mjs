// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function PageWrapper ({ html }) {
  return html`
  <page-header></page-header>
  <page-nav></page-nav>
    <slot></slot>
  <page-footer></page-footer>`
}

