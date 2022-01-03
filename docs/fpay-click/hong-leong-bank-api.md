---
sidebar_position: 1
---

# Hong Leong Bank API

Bank ID : `264`

## Login to the bank account

```md title="[POST] /hongleong/login"
{
    "username":"",
    "password":"",
    "isSameBank": false,
    "amount": "2.00",
    "bankId": "246", - receiver bank account id
    "toAccount": "", - receiver bank account number
    "toAccountName": "", - receiver bank account name
    "requestId": "0xzero"
}
```

```md title="Response"
{
    "fromAccounts": [
        {
            "id": "<bank acc number>",
            "balance": "<amount>"
        },
        {
            "id": "<bank acc number>",
            "balance": "<amount>"
        }
    ],
    "name": "",
    "isToAccountExists": true,
    "bankName": "MAYBANK BERHAD",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZHlsb29uZzg0IiwiaWF0IjoxNjM0MTcxNjg2LCJleHAiOjE2MzQxNzM0ODZ9.bQb0-j_NX1C79etb_tuA88wkhKArw5AwNd2p-zgrBPA"
}
```

## Make a transfer

```md title="[POST] /hongleong/transfer"
{
    "fromAccountId":"fromAccounts.0.id"
}
```

## Request a OTP

```md title="[POST] /hongleong/otp"
{
    "otp":"<OTP Mobile>"
}
```