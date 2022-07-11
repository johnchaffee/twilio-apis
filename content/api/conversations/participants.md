---
title: "Participants"
draft: false
weight: 200
tags:
  - api
  - postman
  - conversations
# # geekdocNav: false
# geekdocBreadcrumb: false
---

Add/remove participants to/from a conversation.

{{< tabs "participants" >}}

{{< tab "Add SMS Participant" >}}
{{< postman id=`create-sms-participant` file=`../../../_includes/conversations/create-sms-participant.js` >}}
{{< /tab >}}

{{< tab "Add Chat Participant" >}}
{{< postman id=`create-chat-participant` file=`../../../_includes/conversations/create-chat-participant.js` >}}
{{< /tab >}}

{{< tab "List" >}}
{{< postman id=`list-participants` file=`../../../_includes/conversations/list-participants.js` >}}
{{< /tab >}}

{{< tab "Fetch" >}}
{{< postman id=`fetch-participant` file=`../../../_includes/conversations/fetch-participant.js` >}}
{{< /tab >}}

{{< tab "Update" >}}
{{< postman id=`update-participant` file=`../../../_includes/conversations/update-participant.js` >}}
{{< /tab >}}

{{< tab "Delete" >}}
{{< postman id=`delete-participant` file=`../../../_includes/conversations/delete-participant.js` >}}
{{< /tab >}}

{{< /tabs >}}
