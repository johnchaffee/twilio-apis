apiParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}/PhoneNumbers",
  method: "GET",
  pathParams: [
    { key: "MessagingServiceSid", value: "" },
  ],
  queryParams: [{ key: "PageSize", value: "" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
