postmanParams = {
  url: "https://verify.twilio.com/v2/Services",
  method: "POST",
  pathParams: [],
  queryParams: [
    { key: "FriendlyName", value: "My First Verify Service" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
