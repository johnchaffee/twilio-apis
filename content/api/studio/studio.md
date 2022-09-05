---
title: "Studio Flow"
draft: true
weight: 100
tags:
  - api
  - postman
  - messaging
# geekdocNav: false
# geekdocBreadcrumb: false
---

Send an HTTP request with custom parameters to a Studio Flow.

{{< tabs "studio" >}}

{{< tab "SURVEY" >}}
Send an HTTP request to a Studio Flow to send an outgoing message and Wait for a Reply. 
{{< api-explorer id=`survey` file=`../params/survey.js` >}}
{{< /tab >}}

{{< tab "CONVERSATION" >}}
Send an HTTP request to a Studio Flow to create or join a Frontline conversation and send an outgoing message. 
{{< api-explorer id=`conversation` file=`../params/conversation.js` >}}
{{< /tab >}}

{{< /tabs >}}
