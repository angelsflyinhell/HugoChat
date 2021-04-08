# API Routes
Base route: `/api/v1`

## User
### Log in
`POST` `/users`  

Example Body
```json
{
  "name": "corsin"
}
```

Response:
```json
{
  "id": "8b343b07-83bd-47e0-b317-7dbb8e3985a8",
  "name": "corsin"
}
```

### Get active users

`GET` `/users`

Response:
```json
["corsin", "timo", "hugo"]
```

### Change name
`PUT` `/users`

Example Body:
```json
{
  "id": "8b343b07-83bd-47e0-b317-7dbb8e3985a8",
  "name": "corsin"
}
```

Example Response:
```json
{
  "id": "8b343b07-83bd-47e0-b317-7dbb8e3985a8",
  "name": "corsin"
}
```

### Send still here
`PATCH` `/users/active/{uuid}`

No request or response body

## Messages
### All Messages
`GET` `/messages`

Response:
```json
{
  "messages": [
    {
      "sentBy": "corsin",
      "sentByID": "8b343b07-83bd-47e0-b317-7dbb8e3985a8",
      "body": "hallo",
      "sentOn": 2643578034265
    },
    {
      "sentBy": "hugo",
      "sentByID": "8b34fb07-83bd-47e0-b317-7dbb8e3985a8",
      "body": "hallo leut",
      "sentOn": 4382759627480
    }
  ]
}
```

### New Messages for a User
`GET` `/messages/new/{timeStamp}`

Response: 
```json
{
  "messages": [
    {
      "sentBy": "corsin",
      "sentByID": "8b343b07-83bd-47e0-b317-7dbb8e3985a8",
      "body": "hallo",
      "sentOn": 2643578034265
    },
    {
      "sentBy": "hugo",
      "sentByID": "8b34fb07-83bd-47e0-b317-7dbb8e3985a8",
      "body": "hallo leut",
      "sentOn": 4382759627480
    }
  ]
}
```

### Send Message
`POST` `/messages/`

Example body:
```json
{
  "sentBy": "8b343b07-83bd-47e0-b317-7dbb8e3985a8",
  "body": "hi",
  "sentOn": 5590432785885
}
```