apiParams = {
  url: "https://studio.twilio.com/v2/Flows/{{FlowSid}}/Executions",
  method: "POST",
  pathParams: [{ key: "FlowSid", value: "FW98082bd07750171d807dc5c38896ef1d" }],
  queryParams: [
    { key: "To", value: "", placeholder: "+1234567890" },
    { key: "From", value: "+14158741967" },
    {
      key: "Parameters",
      value: `{"name":"Fred Gray","body":"Hello from Studio + Frontline"}`,
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
