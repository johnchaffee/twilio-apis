---
title: "Messages"
draft: false
# weight: 100
tags:
  - api
  - postman
  - messaging
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to send and fetch messages with the Twilio Messaging API.

{{< tabs "messaging" >}}

{{< tab "SMS" >}}
{{< postman id=`create` file=`../postman-params/messages/create.js` >}}
{{< /tab >}}

{{< tab "WHATSAPP" >}}
{{< postman id=`whatsapp` file=`../postman-params/messages/whatsapp.js` >}}
{{< /tab >}}

{{< tab "LIST" >}}
{{< postman id=`list` file=`../postman-params/messages/list.js` >}}
{{< /tab >}}

{{< tab "READ" >}}
{{< postman id=`read` file=`../postman-params/messages/read.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
To redact a message-body from a post-flight message, post an empty body to the message instance resource.
{{< postman id=`update` file=`../postman-params/messages/update.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< postman id=`delete` file=`../postman-params/messages/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
