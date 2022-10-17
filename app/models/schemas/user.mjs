export const User = {
  "id": "User",
  "type": "object",
  "required": [
    "email"
  ],
  "properties": {
    "firstname": {
      "type": "string"
    },
    "lastname": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "cell": {
      "type": "string",
      "format": "tel"
    },
    "roles": {
      "type": "object",
      "properties": {
        "role1": {
          "type": "string",
          "enum": [
            "",
            "admin",
            "member"
          ]
        }
      }
    },
    "key": {
      "type": "string"
    }
  }
}
