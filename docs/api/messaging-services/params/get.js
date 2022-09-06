apiParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}",
  method: "GET",
  pathParams: [
    { key: "MessagingServiceSid", value: "" },
  ],
  queryParams: [],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
