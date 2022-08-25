---
title: "Read, Update, Delete"
draft: false
weight: 200
tags:
  - api
  - postman
  - messaging
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to send and fetch messages with the Twilio Messaging API.

{{< tabs "other" >}}

{{< tab "LIST" >}}
{{< api-explorer id=`list` file=`../../../api-params/messages/list.js` >}}
{{< /tab >}}

{{< tab "READ" >}}
{{< api-explorer id=`read` file=`../../../api-params/messages/read.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
To redact a message-body from a post-flight message, post an empty body to the message instance resource.
{{< api-explorer id=`update` file=`../../../api-params/messages/update.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< api-explorer id=`delete` file=`../../../api-params/messages/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
