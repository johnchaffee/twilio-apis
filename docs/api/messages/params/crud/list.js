apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "" },
  ],
  queryParams: [
    { key: "To", value: "" },
    { key: "From", value: "" },
    { key: "DateSent", value: "" },
    { key: "PageSize", value: "2" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
