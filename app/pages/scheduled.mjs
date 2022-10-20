// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  let requests = store.requests || []

  return html`<page-wrapper class="font-sans">
  <page-nav></page-nav>
    <section class="p0">
      ${requests.map(item => `<article class="mb2">
  <div class="mb0">
    <p class="pb-2"><strong class="capitalize">number_of_goalies: </strong>${item?.number_of_goalies || ''}</p>
    <p class="pb-2"><strong class="capitalize">location: </strong>${item?.location || ''}</p>
    <p class="pb-2"><strong class="capitalize">date: </strong>${item?.date || ''}</p>
    <p class="pb-2"><strong class="capitalize">time: </strong>${item?.time || ''}</p>
    <p class="pb-2"><strong class="capitalize">board_info: </strong>${item?.board_info || ''}</p>
    <p class="pb-2"><strong class="capitalize">notes: </strong>${item?.notes || ''}</p>
    <p class="pb-2"><strong class="capitalize">requestor: </strong>${item?.requestor || ''}</p>
    <p class="pb-2"><strong class="capitalize">status: </strong>${item?.status || ''}</p>
    <p class="pb-2"><strong class="capitalize">key: </strong>${item?.key || ''}</p>
  </div>
  <p class="mb-1">
    <enhance-link href="/requests/${item.key}">Edit this request</enhance-link>
  </p>
  <form action="/requests/${item.key}/delete" method="POST" class="mb-1">
    <enhance-submit-button><span slot="label">Delete this request</span></enhance-submit-button>
  </form>
  </article>`).join('\n')}
  </section>
  </page-wrapper>`
}
