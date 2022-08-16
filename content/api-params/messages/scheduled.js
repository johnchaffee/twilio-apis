postmanParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
  ],
  queryParams: [
    { key: "To", value: "+12063996576" },
    { key: "From", value: "{{From}}" },
    { key: "Body", value: "This is a scheduled message" },
    { key: "SendAt", value: "2022-07-31T12:00:00Z" },
    { key: "ScheduleType", value: "fixed" },
    { key: "StatusCallback", value: "{{StatusCallback}}" },
    { key: "MessagingServiceSid", value: "{{MessagingServiceSid}}" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
