// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function PageNav ({ html }) {
  return html`
    <style>
        nav {
            color: var(--primary-500);
        }
    </style>
    <nav class="w-full p0 flex items-center justify-center gap0">
        <a href="/request">Request</a>
        <a href="/scheduled">Scheduled</a>
        <a href="/goalies">Goalies</a>
        <a href="/">History</a>
        <a href="/profile">Profile</a>
    </nav>`
}

