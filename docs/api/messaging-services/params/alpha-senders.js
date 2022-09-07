apiParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}/AlphaSenders",
  method: "GET",
  pathParams: [
    { key: "MessagingServiceSid", value: "", placeholder: "MGabc123abc123abc123abc123abc123" },
  ],
  queryParams: [{ key: "PageSize", value: "", placeholder: "10" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
