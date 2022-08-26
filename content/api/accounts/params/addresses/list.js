apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses.json",
  method: "GET",
  pathParams: [{ key: "AccountSid", value: "" }],
  queryParams: [
    { key: "CustomerName", value: "" },
    { key: "PageSize", value: "" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
