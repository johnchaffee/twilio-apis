---
title: "curl"
draft: true
weight: 200
tags:
  - sdk
  - curl
# geekdocNav: false
# geekdocBreadcrumb: false
---

## Marian Menschig curl scripts

```shell
###############################
## Message Resource
###############################

# Send Message
curl -v -X POST 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json' \
--data-urlencode "From=+17207069111" \
--data-urlencode $'Body=This is a line.\nThis is another line.\nOne last newline.' \
--data-urlencode "To=+14158190280" \
--data-urlencode "StatusCallback=https://webhook.site/a245fcb5-06c5-4ee1-94b3-0ccffa783133/callback" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Send Message (Simple) 
curl -v -X POST 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json' \
--data-urlencode "From=MG865943ec14fec68bc28a15ee294b144f" \
--data-urlencode "Body=BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody" \
--data-urlencode "To=+18323109635" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Delete Message
curl -v -X DELETE "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages/SM0e21e7c901dc469aae15944d67967adc.json" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

###############################
## Account Endpoint
###############################

# Read a list of countries for AvailablePhoneNumbers
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/AvailablePhoneNumbers.json?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Get Account Balance
curl -s -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Balance.json' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' 

# Get Account Usage
curl -s -G "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Usage/Records/LastMonth.json" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

###############################
## Account Usage
###############################

# Get Monthly Usage 
curl -s -G "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Usage/Records/Monthly.json" \
-d "Category=sms" \
-d "StartDate=2022-01-01" \
-d "EndDate=2022-05-04" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Get Account Usage (SMS)
curl -s -G "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Usage/Records.json" \
-d "Category=sms" \
-d "StartDate=2022-04-20" \
-d "EndDate=2022-04-20" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' | less

# List Messages (Same period as above)
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/'$TWILIO_ACCOUNT_SID'/Messages.json?DateSent%3E=2022-04-20T00%3A00%3A00Z&DateSent%3C=2022-04-20T23%3A59%3A59Z&PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' | less


# List Messages (as above, only datestamp - no time portion)
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/'$TWILIO_ACCOUNT_SID'/Messages.json?DateSent%3E=2022-04-20&DateSent%3C=2022-04-21&PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' | less

# Get Active numbers
curl -s -X GET "https://preview.twilio.com/Numbers/ActiveNumbers" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

###############################
## Verify
###############################

# Create a verification service
curl -s -vvv -X POST https://verify.twilio.com/v2/Services \
-H "Content-Type: text/plain" \
--data-urlencode "FriendlyName=My Second Verify Service" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

###############################
## Event Streams
###############################

# List EventStream sinks
curl -X GET 'https://events.twilio.com/v1/Sinks?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Read EventStream subscription
curl -s -X GET 'https://events.twilio.com/v1/Subscriptions?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Delete Eventstream subscription
curl -s -X DELETE "https://events.twilio.com/v1/Subscriptions/DF7e5e8ea8b38e4cff4fe8925f9de9a47f" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'


# Delete Eventstream sink
curl -s -X DELETE "https://events.twilio.com/v1/Sinks/DG116dc48dc1250d119bec20d63fa4b9d6" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Sending message with unsupported TLS version
# ERROR EXPECTED

curl -X POST 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json' \
--data-urlencode "From=+17207069111" \
--data-urlencode "Body=Omg this works.\\\nThis is another line.\\\nOne last newline." \
--data-urlencode "To=+18323109635" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" \
--tlsv1.0 --tls-max 1.0

# Send WhatsApp Message
curl -X POST 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json' \
--data-urlencode "From=whatsapp:+14155238886" \
--data-urlencode "Body=Cool cool I sent this throug the API. " \
--data-urlencode "To=whatsapp:+14159712378" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Send MMS
curl -X POST 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json' \
--data-urlencode "From=+17207069111" \
--data-urlencode "Body=MMS Test" \
--data-urlencode "MediaUrl=https://www.fillmurray.com/640/360" \
--data-urlencode "To=+18323109635" \
--data-urlencode "StatusCallback=https://webhook.site/c7917a52-43cc-4287-9149-738a2f59992a" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Test X-Twilio-Signature Header existence for MediaURL retrieval
curl -X POST 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json' \
--data-urlencode "From=+17207069111" \
--data-urlencode "Body=MMS Test" \
--data-urlencode "MediaUrl=https://webhook.site/ed2a599d-2a9f-44ae-8b62-56444d049bb9" \
--data-urlencode "To=+18323109635" \
--data-urlencode "StatusCallback=https://webhook.site/ed2a599d-2a9f-44ae-8b62-56444d049bb9" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Fetch Message
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages/SM0b94cee214c4d01f1f4c021c3c745909.json' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Fetch Messages Sent in a timeframe
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json?DateSent%3E=2021-9-01T01%3A23%3A45Z&DateSent%3C=2021-9-28T01%3A23%3A45Z&PageSize=500' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"


# Check available phone numbers
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/AvailablePhoneNumbers/US/Local.json?postal_code=%2B' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Create a Video Room
curl -s -X POST https://video.twilio.com/v1/Rooms \
--data-urlencode "UniqueName=Test1" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Complete a room
curl -s -X POST https://video.twilio.com/v1/Rooms/RMe80505b73c6ec7b07f1a82bc54c2df95 \
--data-urlencode "Status=completed" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Room with 100 Participans (expected to fail - not part of the 100 participant Beta)
curl -X POST https://video.twilio.com/v1/Rooms \
--data-urlencode "UniqueName=AlejandroTest" \
--data-urlencode "StatusCallback=https://webhook.site/1ab4cbac-e770-40d2-833b-35a75eb0221c" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Fetch a room
curl -X GET 'https://video.twilio.com/v1/Rooms/RM3e3dc9bbb9e7d43b730dc5233ad1a5a2' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' | less

# Fetch rooms by Status
curl -X GET 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=500' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' | less

# Fetch Participants
curl -X GET 'https://video.twilio.com/v1/Rooms/RMcc96b00a73e53d4453fba0f5939ef0ba/Participants' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' | less

# Fetch a Room Participant
curl -G 'https://video.twilio.com/v1/Rooms/Jhhh/Participants/Marian3' \
-u 'SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_api_key_secret'

# List connected participants
curl -G 'https://video.twilio.com/v1/Rooms/DailyStandup/Participants/' \
    -u 'SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_api_key_secret' \
    -d 'Status=connected'

# Create Sync List
curl -X POST https://sync.twilio.com/v1/Services/IS925fa32d9c2c239fea444b98d1964eee/Lists \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# View Usage
curl -G https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Usage/Records/LastMonth.json \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}"

# Update Phone number sms_url
curl -s -X POST https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/IncomingPhoneNumbers/PN5b781e9aee700b0a188335a0aac5d9b1.json \
--data-urlencode "SmsUrl=https://www.google.com" \
--data-urlencode "FriendlyName=Marian Test 2" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create SMS Binding
curl -X POST https://notify.twilio.com/v1/Services/IS54150add1149ce37f9dd146d8d9ce021/Bindings \
--data-urlencode "Identity=marian" \
--data-urlencode "BindingType=sms" \
--data-urlencode "Address=+18323109635" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Send SMS Notification
curl -X POST https://notify.twilio.com/v1/Services/IS54150add1149ce37f9dd146d8d9ce021/Notifications \
-d 'Identity=marian' \
-d 'Body=Hello User again!' \
-d 'DeliveryCallbackUrl=https://webhook.site/04f53593-6616-4fb1-a928-49269b5e6955' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Read Flow Executions
curl -X GET 'https://studio.twilio.com/v2/Flows/FW32bbf550b19a7e00544aaaac7a7791fd/Executions?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Fetch Flow Execution
curl -X GET 'https://studio.twilio.com/v2/Flows/FW32bbf550b19a7e00544aaaac7a7791fd/Executions/FNd88bf200db97e9791905b31fea5f1116' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Fetch Flow Steps
curl -X GET 'https://studio.twilio.com/v2/Flows/FW32bbf550b19a7e00544aaaac7a7791fd/Executions/FNb88643a8bed053ec79d2b510fb24c127/Steps?PageSize=50' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Asset (Step 1)
curl -X POST "https://serverless.twilio.com/v1/Services/ZS853d2b467d5df131b5b31fdd29238efc/Assets" \
--data-urlencode "FriendlyName=MyFriendlyName" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Asset Version (Step 2)
curl -s -X POST "https://serverless-upload.twilio.com/v1/Services/ZS853d2b467d5df131b5b31fdd29238efc/Assets/ZHf0bedcf14c47b90a657cf8046992a5d2/Versions" \
-F "Content=@/Users/mmenschig/Desktop/funnycountryflag.png; type=image/png" \
-F "Path=/asset2" \
-F "Visibility=public" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Lookups a number
curl -X GET 'https://lookups.twilio.com/v1/PhoneNumbers/+18323109636' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Move phone number to another account
curl -s -X POST "https://api.twilio.com/2010-04-01/Accounts/AC77eb45761046abf604b5d76e5c244a77/IncomingPhoneNumbers/PN1d54675608bff7f403e42a3d2975d9c7.json" \
--data-urlencode "AccountSid=ACbd010c3006bb82fcaa99bee8371644b6" \
-u "AC77eb45761046abf604b5d76e5c244a77:secret" | jq '.'



# Lookup Account Balance
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Balance.json' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Trigger Studio Flow via REST API

PARAMETERS=$(cat << EOF
{
    "question": "Please rate your stay"
}
EOF
)

curl -X POST "https://studio.twilio.com/v2/Flows/FW3289d376f766269df5cca3f7a742e85e/Executions" \
--data-urlencode "To=+18323109635" \
--data-urlencode "From=+17207069111" \
--data-urlencode "Parameters=$PARAMETERS" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# List Phone numbers by Area Code
curl -s -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/AvailablePhoneNumbers/US/Local.json?AreaCode=720&PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Get Calls
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Calls.json?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Get Call Event
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Calls/CA5960185bc10b22071967911e856886d3/Events.json?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Call
curl -X POST https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Calls.json \
--data-urlencode "Method=GET" \
--data-urlencode "StatusCallback=https://webhook.site/04f53593-6616-4fb1-a928-49269b5e6955" \
--data-urlencode "StatusCallbackMethod=POST" \
--data-urlencode "Url=http://demo.twilio.com/docs/voice.xml" \
--data-urlencode "To=+18323109635" \
--data-urlencode "From=+17207069111" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Fetch Message Media URL
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages/MMd892f924c51263aeafd3c25036940e68/Media.json' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Fetch Message Media
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages/MMd892f924c51263aeafd3c25036940e68/Media/ME2d4e89bb21708855c99e4fe6bec92a56.json' \

# Fetch Message based on Number
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json?DateSent%3E=2021-09-23T00%3A00%3A00Z&From=%2B14159693849' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Download the Media object (image)
wget --http-user="ACbd010c3006bb82fcaa99bee8371644b6" --http-password="aa9d643eb66c38aa053a738f53b12aa2" "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages/MMd892f924c51263aeafd3c25036940e68/Media/ME2d4e89bb21708855c99e4fe6bec92a56" -O mediaimage.png

# Update IncomingPhoneNumber
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/IncomingPhoneNumbers/PN5b781e9aee700b0a188335a0aac5d9b1.json" \
--data-urlencode "EmergencyStatus=Enabled" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Make Service UI-editable
curl -X POST https://serverless.twilio.com/v1/Services/ZSf4ad009ea16d6dcd443dcd4820634af8 \
--data-urlencode "UiEditable=True" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Send Whatsapp message
curl -X POST https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Messages.json \
--data-urlencode "From=whatsapp:+17207069111" \
--data-urlencode "Body=Hello there Marian" \
--data-urlencode "To=whatsapp:+18323109635" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Send Notify via SMS
curl -X POST https://notify.twilio.com/v1/Services/IS54150add1149ce37f9dd146d8d9ce021/Notifications \
--data-urlencode 'ToBinding={"binding_type":"sms", "address":"+18323109635"}'  \
-d 'Sms={"status_callback": "https://webhook.site/4c862785-84c8-4bb4-be49-4a6f6619c6d0/statusCallback"}' \
--data-urlencode 'Body=Knock knock!'  \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# See Usage records
curl "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Usage/Records.json" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

while true; do
    now=$( date +"%Y-%m-%d %H:%M:%S")
    res=$( curl -s -X GET https://us2.vss.twilio.com )
    echo "$now :: $res "
    sleep 60
done

# Record Call
CALL_SID=CAd237fec718383a0863bc1d0bc8094c22
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Calls/${CALL_SID}/Recordings.json" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Conversation
curl -X POST https://conversations.twilio.com/v1/Services/IS2781cc05ffda43bd827254b5c62362b1/Conversations \
--data-urlencode "FriendlyName=Conversation 1" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Add Conversation Participant (Chat)
curl -X POST https://conversations.twilio.com/v1/Services/IS2781cc05ffda43bd827254b5c62362b1/Conversations/CHebfae1fb0f1442759dba34755ad8b0d1/Participants \
--data-urlencode "Identity=testPineApple" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Usage category for SMS last 30 days
curl -s -X GET https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/Usage/Records.json \
    --data-urlencode "Category=sms" \
    -d "StartDate=2021-08-01" \
    -d "EndDate=2021-09-30" \
    -u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.' | less

# List all Twilio number SIDs for your account
numbers=$( curl -s -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/IncomingPhoneNumbers.json?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq -r '.incoming_phone_numbers[] | (.sid)' )

IFS=$'\n'; while read num; do
    curl -s -X GET "https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/IncomingPhoneNumbers/${num}.json" -u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'
    sleep 1
done < <( echo $numbers )

# Fetch Incoming Phone Number resource
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/IncomingPhoneNumbers/PN5b781e9aee700b0a188335a0aac5d9b1.json' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# List IncomingPhoneNumbers in Account
curl -s -X GET 'https://api.twilio.com/2010-04-01/Accounts/ACbd010c3006bb82fcaa99bee8371644b6/IncomingPhoneNumbers.json?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq -r '.incoming_phone_numbers[] | {sid, origin, phone_number, friendly_name}'


# List all accounts
curl -X GET 'https://api.twilio.com/2010-04-01/Accounts.json?PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Chat: Create Media Resource
curl -X POST "https://mcs.us1.twilio.com/v1/Services/IS25fd9f13eaa44561b6e0d946a4a4331f/Media" \
-H "Content-Type: multipart/form-data" \
-F "media=@/Users/mmenschig/Downloads/TwilioHero.png;type=image/png" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Chat: Retrieve a Media resource
curl -X GET "https://mcs.us1.twilio.com/v1/Services/IS25fd9f13eaa44561b6e0d946a4a4331f/Media/MEe5b8116e7cb9922db6617cafaeca2fee" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'


# Update Phone Number
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/IncomingPhoneNumbers/PN5b781e9aee700b0a188335a0aac5d9b1.json" \
--data-urlencode "EmergencyStatus=Inactive" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Studio Flow
DEFINITION=$(cat << EOF
{
    "description": "Created via rest",
    "flags": {
        "allow_concurrent_calls": true
    },
    "initial_state": "Trigger",
    "states": [
        {
            "name": "Trigger",
            "properties": {
                "offset": {
                    "x": 0,
                    "y": 0
                }
            },
            "transitions": [],
            "type": "trigger"
        }
    ]
}
EOF
)

curl -X POST https://studio.twilio.com/v2/Flows \
--data-urlencode "CommitMessage=First draft" \
--data-urlencode "FriendlyName=CREATED VIA REST v1" \
--data-urlencode "Status=draft" \
--data-urlencode "Definition=$DEFINITION" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Delete Messaging Service
curl -X DELETE "https://messaging.twilio.com/v1/Services/MGf34bc16c5e13f0a7584d27ed5e7d786d" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Fetch Rooms
curl -X GET 'https://video.twilio.com/v1/Rooms?Status=in-progress&UniqueName=test1&PageSize=20' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Get Room Participants
curl -G 'https://video.twilio.com/v1/Rooms/test1/Participants/' \
    -u 'SK7e0a5f93d2aafa98013bafe016cb3f2e:yhvweXF7Oj8NrWIIDLkWrD5PFwAz1gz9' \
    -d 'Status=connected' | jq '.'

curl -s -X POST "https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Tokens.json" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Generate NTS Token
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Tokens.json" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Custom Job
curl -X POST https://bulkexports.twilio.com/v1/Exports/Messages/Jobs \
--data-urlencode "Email=mmenschig@twilio.com" \
--data-urlencode "WebhookMethod=POST" \
--data-urlencode "WebhookUrl=https://webhook.site/1ab4cbac-e770-40d2-833b-35a75eb0221c" \
--data-urlencode "StartDay=2021-11-01" \
--data-urlencode "EndDay=2021-12-05" \
--data-urlencode "FriendlyName=Export1" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Export day
curl -X GET 'https://bulkexports.twilio.com/v1/Exports/Messages/Days/2021-11-29' \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Proxy Service
curl -X POST "https://proxy.twilio.com/v1/Services" \
--data-urlencode "UniqueName=Proxy_Demo" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Add Phone number to Proxy Service
curl -s -X POST "https://proxy.twilio.com/v1/Services/KSde3c424c7d19857cc86490a65e716c33/PhoneNumbers" \
--data-urlencode "Sid=PN225556ffdcf5c99ed294a261d3084358" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Session in Proxy Service
curl -X POST "https://proxy.twilio.com/v1/Services/KSde3c424c7d19857cc86490a65e716c33/Sessions" \
--data-urlencode "UniqueName=MyFirstSession" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Create Participant 1 and add to Proxy Service Session
curl -s -X POST "https://proxy.twilio.com/v1/Services/KSde3c424c7d19857cc86490a65e716c33/Sessions/KC4f9d17677d14ffe4de5f72332de6d1e3/Participants" \
--data-urlencode "FriendlyName=Mariana" \
--data-urlencode "Identifier=+14158190280" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Initiate a text based conversation in Proxy
curl -s -X POST "https://proxy.twilio.com/v1/Services/KSde3c424c7d19857cc86490a65e716c33/Sessions/KC4f9d17677d14ffe4de5f72332de6d1e3/Participants/KP6410763b307501ec84f85dc0a10dcb94/MessageInteractions" \
--data-urlencode "Body=Reply to this message to chat with your Owl Taxis driver." \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# Delete A session
curl -X DELETE "https://proxy.twilio.com/v1/Services/KSde3c424c7d19857cc86490a65e716c33/Sessions/KC4f9d17677d14ffe4de5f72332de6d1e3" \
-u "ACbd010c3006bb82fcaa99bee8371644b6:${TWILIO_AUTH_TOKEN}" | jq '.'

# MANUALLY CREATE TWILIO SIGNATURE
echo -n "https://mycompany.com/myapp.php?foo=1&bar=2Caller+14158675310CallSidCA1234567890ABCDEDigits1234From+14158675310To+18005551212" | openssl dgst -sha1 -hmac "12345" -binary | base64
```