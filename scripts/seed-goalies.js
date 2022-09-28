const db = require('@begin/data')
async function main (){
  await db.set({ table: 'goalies', key: 'g1', email: 'admin@example.com', first_name: 'Patrick', last_name: 'Roy' })
  await db.set({ table: 'goalies', key: 'g2', email: 'member@example.com', first_name: 'Carey', last_name: 'Price' })
  await db.set({ table: 'goalies', key: 'g3', email: 'dryden@example.com', first_name: 'Ken', last_name: 'Dryden' })
}
main()
