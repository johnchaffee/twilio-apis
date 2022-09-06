apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{SubAccountSid}}.json",
  method: "GET",
  pathParams: [{ key: "SubAccountSid", value: "" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
