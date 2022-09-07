apiParams = {
  url: "https://studio.twilio.com/v2/Flows/{{FlowSid}}/Executions",
  method: "POST",
  pathParams: [{ key: "FlowSid", value: "FWa865843ac44e6ecca55bef61b8fa60ef" }],
  queryParams: [
    { key: "To", value: "", placeholder: "+1234567890" },
    { key: "From", value: "+15737794935" },
    {
      key: "Parameters",
      value: `{"name":"Fred"}`,
    },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
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
