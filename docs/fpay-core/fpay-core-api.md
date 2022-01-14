---
sidebar_position: 1
---

# FPay Core API

:::note

**Table: merchant**

1. Make sure secret field is remove.
2. Create new field name "ip"

:::

## Merchant

### Register merchant

```md title="[POST] /merchants"
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

### Add created merchant ID

```md title="[POST] /merchants"
```

### Request merchant information

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

### Get merchant list

```md title="[GET] /merchants"

// Role USER : will show only merchant that created under user.
// Role ADMIN : will list all.

```

### Insert IP address

```md title="[POST] /merchant-requests"
```

## User

### Create user

```md title="[POST] /users"
{
    name
    username // unique
    password
    role // ADMIN or USER
}
```

### Update user

```md title="[PUT] /users" 
```

### Get user details

```md title="[GET] /users/:id"
```

## TO BE CONFIRMED ###

:::note
**Table: merchant_request**
:::

```
{
    callback_response
    callback_count           
    callback_is_repeat       
    callback_repeat_response 
    transactions_id          
    transactions_id_bank     
    transactions_username  
}
```