const db = require('@begin/data')
async function main (){
  await db.set({ table: 'users', key: 'u1', email: 'admin@example.com', firstname: 'Jane', lastname: 'Doe', roles: { role1: 'admin' } })
  await db.set({ table: 'users', key: 'u2', email: 'member@example.com', firstname: 'John', lastname: 'Smith', roles: { role1: 'member' } })
}
main()

