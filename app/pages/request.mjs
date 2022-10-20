/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const { account = {}, request = {}, problems = {}} = store

  return html`<page-wrapper class="font-sans">
    <page-nav></page-nav>
    <section class="p0">
    <enhance-form
  action="/requests/${request.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <label for="number_of_goalies" class="radius0">
  <div class="mb-3">
    Number of Goalies Required
  </div>
  <select id="number_of_goalies" name="number_of_goalies" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none" ><option value="1" ${"1" === request?.number_of_goalies ? 'selected' : ''}>1</option><option value="2" ${"2" === request?.number_of_goalies ? 'selected' : ''}>2</option></select></label>
  <enhance-text-input label="Location" type="text" id="location" name="location" value="${request?.location}" errors="${problems?.location?.errors}"></enhance-text-input>
  <enhance-text-input label="Date" type="date" id="date" name="date" value="${request?.date}" errors="${problems?.date?.errors}"></enhance-text-input>
  <enhance-text-input label="Time" type="time" id="time" name="time" value="${request?.time}" errors="${problems?.time?.errors}"></enhance-text-input>
  <enhance-text-input label="Board information" type="text" id="board_info" name="board_info" value="${request?.board_info}" errors="${problems?.board_info?.errors}"></enhance-text-input>
  <enhance-text-input label="Notes" type="text" id="notes" name="notes" value="${request?.notes}" errors="${problems?.notes?.errors}"></enhance-text-input>
  <input type="hidden" id="requestor" name="requestor" value="${account?.user?.email}" />
  <input type="hidden" id="status" name="status" value="${request?.status || 'open'}" />
  <input type="hidden" id="key" name="key" value="${request?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
</enhance-form>
</section>
  </page-wrapper>`
}
