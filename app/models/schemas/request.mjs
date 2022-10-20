export const Request = {
  "id": "Request",
  "type": "object",
  "properties": {
    "number_of_goalies": {
      "type": "integer",
      "enum": [
        1,
        2
      ]
    },
    "location": {
      "type": "string"
    },
    "date": {
      "type": "string",
      "format": "date"
    },
    "time": {
      "type": "string",
      "format": "time"
    },
    "board_info": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    },
    "requestor": {
      "type": "string",
      "format": "hidden"
    },
    "status": {
      "type": "string",
      "enum": [
        "open",
        "filled",
        "failed"
      ]
    },
    "key": {
      "type": "string"
    }
  }
}