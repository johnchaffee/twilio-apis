postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations",
  method: "GET",
  pathParams: [],
  queryParams: [{ key: "PageSize", value: "10" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{FrontlineAcctSid}}" },
    { key: "password", value: "{{FrontlineAuthToken}}" },
  ],
}
