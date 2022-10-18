// View documentation at: https://docs.begin.com
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const goalie = store.goalie || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <enhance-form
  action="/goalies/${goalie.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Goalie">
  <enhance-text-input label="First Name" type="text" id="first_name" name="first_name" value="${goalie?.first_name}" errors="${problems?.first_name?.errors}"></enhance-text-input>
  <enhance-text-input label="Last Name" type="text" id="last_name" name="last_name" value="${goalie?.last_name}" errors="${problems?.last_name?.errors}"></enhance-text-input>
  <enhance-text-input label="Email" type="email" id="email" name="email" value="${goalie?.email}" errors="${problems?.email?.errors}"></enhance-text-input>
  <enhance-text-input label="Phone" type="tel" id="phone" name="phone" value="${goalie?.phone}" errors="${problems?.phone?.errors}"></enhance-text-input>
  <input type="hidden" id="key" name="key" value="${goalie?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</enhance-page-container>`
}
