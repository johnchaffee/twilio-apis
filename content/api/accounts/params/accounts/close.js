apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{SubAccountSid}}.json",
  method: "POST",
  pathParams: [{ key: "SubAccountSid", value: "" }],
  queryParams: [{ key: "Status", value: "closed" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
