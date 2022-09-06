apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{SubAccountSid}}.json",
  method: "POST",
  pathParams: [{ key: "SubAccountSid", value: "" }],
  queryParams: [{ key: "Status", value: "closed" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
