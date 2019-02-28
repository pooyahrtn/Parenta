## Login

```javascript
post /login/
body={
    phone_number: String
}
```

## Confirm Phone number
```javascript
post /confirm/
body={
    phone_number: String,
    confirm_code: Number
}

response={
    token: String
}
```
## Home
```javascript
GET /home
response={
    data: [
        {
            id: ID,
            title: String!,
            desc: String!,
            start_date: Date!,
            end_date: Date!,
            type: 'AG' | 'NE' | 'SU' !,
            priority: Number!,
            is_read: Boolean!,
        }
    ]
}
```


## Agreement
```javascript
post /agreement/<id>/
body={
    confirm: Boolean!,
    explaination: String
}

```


## Read 
```javascript
POST /read/
bosy={
    type: 'AG' | 'NE' | 'SU',
    id: ID
}
```

