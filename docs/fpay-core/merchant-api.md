---
sidebar_position: 1
---

# Merchant API

## Register a merchant

```md title="[POST]  /merchants"
{
    name
    email
    registration_no
    address
    state
    country
    bank_account
    bank_id
    bank_holder_name
    domain
    fees
    settlement_day
}
```



## Request merchant information

```md title="[POST] /merchants/request"
{
    code
    amount
    user_name
    user_email
    user_contact
    ref_id
    callback_url
    response_url
    remark
    signature
}
```
