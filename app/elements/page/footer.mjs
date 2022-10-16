// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function PageFooter ({ html, state }) {
  return html`
    <style>
        footer {
            background-color: var(--grey-100);
        }
    </style>
    <footer class="w-full p0">
      <p>Debug Info:</p>
      <pre>${JSON.stringify(state, null, 2)}</pre>
    </footer>`
}

