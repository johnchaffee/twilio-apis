postmanParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}/PhoneNumbers/{{PhoneNumberSid}}",
  method: "GET",
  pathParams: [
    { key: "MessagingServiceSid", value: "{{MessagingServiceSid}}" },
    { key: "PhoneNumberSid", value: "{{PhoneNumberSid}}" },
  ],
  queryParams: [],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
