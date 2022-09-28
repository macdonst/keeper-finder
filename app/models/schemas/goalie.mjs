export const Goalie = {
  "id": "Goalie",
  "type": "object",
  "properties": {
    "first_name": {
      "type": "string"
    },
    "last_name": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "phone": {
      "type": "string",
      "format": "tel"
    },
    "key": {
      "type": "string"
    }
  }
}