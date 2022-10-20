// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  let requests = store.requests || []
  const request = store.request || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <main>
    <h1 class="mb1 font-semibold text3">Requests page</h1>
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
<details class="mb0" ${Object.keys(problems).length ? 'open' : ''}>
    <summary>New request</summary>
    <enhance-form
  action="/requests/${request.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Request">
  <label for="number_of_goalies" class="radius0">
  <div class="mb-3">
    Number_of_goalies
  </div>
  <select id="number_of_goalies" name="number_of_goalies" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none" ><option value="1" ${"1" === request?.number_of_goalies ? 'selected' : ''}>1</option><option value="2" ${"2" === request?.number_of_goalies ? 'selected' : ''}>2</option></select></label>
  <enhance-text-input label="Location" type="text" id="location" name="location" value="${request?.location}" errors="${problems?.location?.errors}"></enhance-text-input>
  <enhance-text-input label="Date" type="date" id="date" name="date" value="${request?.date}" errors="${problems?.date?.errors}"></enhance-text-input>
  <enhance-text-input label="Time" type="time" id="time" name="time" value="${request?.time}" errors="${problems?.time?.errors}"></enhance-text-input>
  <enhance-text-input label="Board_info" type="text" id="board_info" name="board_info" value="${request?.board_info}" errors="${problems?.board_info?.errors}"></enhance-text-input>
  <enhance-text-input label="Notes" type="text" id="notes" name="notes" value="${request?.notes}" errors="${problems?.notes?.errors}"></enhance-text-input>
  <input type="hidden" id="requestor" name="requestor" value="${request?.requestor}" />
  <label for="status" class="radius0">
  <div class="mb-3">
    Status
  </div>
  <select id="status" name="status" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none" ><option value="open" ${"open" === request?.status ? 'selected' : ''}>open</option><option value="filled" ${"filled" === request?.status ? 'selected' : ''}>filled</option><option value="failed" ${"failed" === request?.status ? 'selected' : ''}>failed</option></select></label>
  <input type="hidden" id="key" name="key" value="${request?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</details>
</main>
</enhance-page-container>
  `
}
