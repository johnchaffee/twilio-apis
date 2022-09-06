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
    { key: "PageSize", value: "" },
  ],
  headerParams: [],
  authParams: [
    {
      key: "username",
      value: "",
      placeholder: "Enter AccountSID or API Key SID",
    },
    {
      key: "password",
      value: "",
      placeholder: "Enter AuthToken or API Key Secret",
    },
  ],
}
