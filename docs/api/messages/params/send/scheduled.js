apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "" },
  ],
  queryParams: [
    { key: "To", value: "" },
    { key: "From", value: "" },
    { key: "Body", value: "This is a scheduled message" },
    { key: "SendAt", value: "2022-07-31T12:00:00Z" },
    { key: "ScheduleType", value: "fixed" },
    { key: "StatusCallback", value: "" },
    { key: "MessagingServiceSid", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
