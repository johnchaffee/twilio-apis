---
title: "Read, Update, Delete"
draft: false
weight: 200
tags:
  - messages
# geekdocNav: false
# geekdocBreadcrumb: false
---

Read, Update and Delete messages with the Twilio Messaging API.

{{< tabs "other" >}}

{{< tab "LIST" >}}
You may optionally query by `To`, `From` and `DateSent`. 

Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date, such as `DateSent` `2022-08-25` . You can also specify an inequality, such as `DateSent>` `YYYY-MM-DD` to read messages sent on or after midnight on a date or `DateSent>` `2022-08-25T22:00:00` to read messages sent on or after a specific time. Use `DateSent<`, to find messages sent before a specific date or time.

{{< api-explorer id=`list` file=`../params/crud/list.js` >}}
{{< /tab >}}

{{< tab "READ" >}}
{{< api-explorer id=`read` file=`../params/crud/read.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
To redact a message-body from a post-flight message, post an empty body to the message instance resource.
{{< api-explorer id=`update` file=`../params/crud/update.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< api-explorer id=`delete` file=`../params/crud/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
