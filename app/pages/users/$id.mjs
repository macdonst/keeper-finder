// View documentation at: https://docs.begin.com
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const user = store.user || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <enhance-form
  action="/users/${user.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="User">
  <enhance-text-input label="First name" type="text" id="firstname" name="firstname" value="${user?.firstname}" errors="${problems?.firstname?.errors}"></enhance-text-input>
  <enhance-text-input label="Last name" type="text" id="lastname" name="lastname" value="${user?.lastname}" errors="${problems?.lastname?.errors}"></enhance-text-input>
  <enhance-text-input label="Email" type="email" id="email" name="email" required value="${user?.email}" errors="${problems?.email?.errors}"></enhance-text-input>
  <enhance-fieldset legend="Roles"><label for="roles.role1" class="radius0">
  <div class="mb-3">
    Roles.role1
  </div>
  <select id="roles.role1" name="roles.role1" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none" ><option value="" ${"" === user?.roles ? 'selected' : ''}></option><option value="admin" ${"admin" === user?.roles ? 'selected' : ''}>admin</option><option value="member" ${"member" === user?.roles ? 'selected' : ''}>member</option></select></label>
<label for="roles.role2" class="radius0">
  <div class="mb-3">
    Roles.role2
  </div>
  <select id="roles.role2" name="roles.role2" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none" ><option value="" ${"" === user?.roles ? 'selected' : ''}></option><option value="admin" ${"admin" === user?.roles ? 'selected' : ''}>admin</option><option value="member" ${"member" === user?.roles ? 'selected' : ''}>member</option></select></label>
<label for="roles.role3" class="radius0">
  <div class="mb-3">
    Roles.role3
  </div>
  <select id="roles.role3" name="roles.role3" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none" ><option value="" ${"" === user?.roles ? 'selected' : ''}></option><option value="admin" ${"admin" === user?.roles ? 'selected' : ''}>admin</option><option value="member" ${"member" === user?.roles ? 'selected' : ''}>member</option></select></label></enhance-fieldset>
  <input type="hidden" id="key" name="key" value="${user?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</enhance-page-container>`
}
