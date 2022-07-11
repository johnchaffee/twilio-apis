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
{{< postman id=`create` file=`../../_includes/messages/create.js` >}}
{{< /tab >}}

{{< tab "WHATSAPP" >}}
{{< postman id=`whatsapp` file=`../../_includes/messages/whatsapp.js` >}}
{{< /tab >}}

{{< tab "LIST" >}}
{{< postman id=`list` file=`../../_includes/messages/list.js` >}}
{{< /tab >}}

{{< tab "READ" >}}
{{< postman id=`read` file=`../../_includes/messages/read.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
To redact a message-body from a post-flight message, post an empty body to the message instance resource.
{{< postman id=`update` file=`../../_includes/messages/update.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
{{< postman id=`delete` file=`../../_includes/messages/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
