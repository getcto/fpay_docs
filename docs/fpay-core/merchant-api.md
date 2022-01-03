---
sidebar_position: 1
---

# Merchant API

## Register a merchant

```
[post] /merchants
```

1. name
2. email
3. registration_no
4. address
5. state
6. country
7. bank_account
8. bank_id
9. bank_holder_name
10. domain
11. fees
12. settlement_day

## Request merchant information

```
[post] /merchants/request
```

1. code
2. amount
3. user_name
4. user_email
5. user_contact
6. ref_id:
7. callback_url
8. response_url
9. remark
10. signature