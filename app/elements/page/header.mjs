// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function PageHeader ({ html }) {
  return html`
    <header class="w-full p0 flex items-center">
      <span class="font-semibold text2">KeeperFinder</span>
      <div class="w-full flex justify-end self-center">Login</div>
    </header>`
}

