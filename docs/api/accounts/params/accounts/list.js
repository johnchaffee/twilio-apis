apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts.json",
  method: "GET",
  pathParams: [],
  queryParams: [
    {
      key: "Status",
      value: "",
      placeholder: "active, suspended, closed",
    },
    { key: "PageSize", value: "", placeholder: "10" },
  ],
  headerParams: [],
  authParams: [
    {
      key: "username",
      value: "",
      placeholder: "Account SID or API Key SID",
    },
    {
      key: "password",
      value: "",
      placeholder: "AuthToken or API Key Secret",
    },
  ],
}
