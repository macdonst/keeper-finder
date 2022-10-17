/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const { user, problems } = store

  return html`<page-wrapper class="font-sans">
    <page-nav></page-nav>
    <section class="p0">
    <enhance-form
  action="/profile"
  method="POST">
  <div class="${problems?.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems?.form}</ul>
  </div>
  <enhance-text-input label="First Name" type="text" id="firstname" name="firstname" value="${user?.firstname}" errors="${problems?.firstname?.errors}"></enhance-text-input>
  <enhance-text-input label="Last Name" type="text" id="lastname" name="lastname" value="${user?.lastname}" errors="${problems?.lastname?.errors}"></enhance-text-input>
  <enhance-text-input label="Email" type="email" id="email" name="email" required value="${user?.email}" errors="${problems?.email?.errors}"></enhance-text-input>
  <enhance-text-input label="Cell" type="tel" id="cell" name="cell" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" value="${user?.cell}" errors="${problems?.cell?.errors}"></enhance-text-input>
  <input type="hidden" id="key" name="key" value="${user?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
</enhance-form>
</section>
  </page-wrapper>`
}
