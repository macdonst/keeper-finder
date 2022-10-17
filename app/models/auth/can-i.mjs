export default function (req, role) {
  const { session = {} } = req
  const account = session.account
  const userRoles = Object.values(account?.user?.roles || {} )

  console.log(account)

  console.log(userRoles)

  if (!role) {
    return account
  }
  else if (userRoles?.includes(role)) {
    return true
  }
  else return false
}
