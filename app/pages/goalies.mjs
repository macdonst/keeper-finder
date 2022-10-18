// View documentation at: https://docs.begin.com
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const { problems = {}, goalies = [], goalie = {} } = store

  return html`<page-wrapper class="font-sans">
  <page-nav></page-nav>
  <enhance-page-container>
  <main>
    ${goalies.map(item => `<article class="mb2">
<div class="mb0">
  <p class="pb-2"><strong class="capitalize">first name: </strong>${item?.first_name || ''}</p>
  <p class="pb-2"><strong class="capitalize">last name: </strong>${item?.last_name || ''}</p>
  <p class="pb-2"><strong class="capitalize">email: </strong>${item?.email || ''}</p>
  <p class="pb-2"><strong class="capitalize">phone: </strong>${item?.phone || ''}</p>
  <p class="pb-2"><strong class="capitalize">key: </strong>${item?.key || ''}</p>
</div>
<p class="mb-1">
  <enhance-link href="/goalies/${item.key}">Edit this goalie</enhance-link>
</p>
<form action="/goalies/${item.key}/delete" method="POST" class="mb-1">
  <enhance-submit-button><span slot="label">Delete this goalie</span></enhance-submit-button>
</form>
</article>`).join('\n')}
<details class="mb0" ${Object.keys(problems).length ? 'open' : ''}>
    <summary>New goalie</summary>
    <enhance-form
  action="/goalies/${goalie.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Goalie">
  <enhance-text-input label="First name" type="text" id="first_name" name="first_name" value="${goalie?.first_name}" errors="${problems?.first_name?.errors}"></enhance-text-input>
  <enhance-text-input label="Last name" type="text" id="last_name" name="last_name" value="${goalie?.last_name}" errors="${problems?.last_name?.errors}"></enhance-text-input>
  <enhance-text-input label="Email" type="email" id="email" name="email" value="${goalie?.email}" errors="${problems?.email?.errors}"></enhance-text-input>
  <enhance-text-input label="Phone" type="tel" id="phone" name="phone" value="${goalie?.phone}" errors="${problems?.phone?.errors}"></enhance-text-input>
  <input type="hidden" id="key" name="key" value="${goalie?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</details>
</main>
</enhance-page-container>
</page-wrapper>`
}
