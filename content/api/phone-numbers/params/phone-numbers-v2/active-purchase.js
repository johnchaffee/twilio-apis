apiParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/",
  method: "POST",
  pathParams: [],
  queryParams: [{ key: "PhoneNumber", value: "+14155551234" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}