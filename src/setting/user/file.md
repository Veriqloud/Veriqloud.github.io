# File

The user detail list is writen in a Yaml file as [described by Authelia](https://www.authelia.com/reference/guides/passwords/#yaml-format). E.g.
```yaml
users:
  harry:
    disabled: false
    displayname: 'Harry Potter'
    password: '$argon2id$v=19$m=65536,t=3,p=2$BpLnfgDsc2WD8F2q$o/vzA4myCqZZ36bUGsDY//8mKUYNZZaR0t4MFFSs+iM'
    email: 'harry.potter@authelia.com'
    groups: []
  bob:
    disabled: false
    displayname: 'Bob Dylan'
    password: '$argon2id$v=19$m=65536,t=3,p=2$BpLnfgDsc2WD8F2q$o/vzA4myCqZZ36bUGsDY//8mKUYNZZaR0t4MFFSs+iM'
    email: 'bob.dylan@authelia.com'
    groups:
      - 'dev'
    given_name: 'Robert'
    family_name: 'Zimmerman'
    middle_name: 'Allen'
    nickname: 'Bob'
    profile: 'https://en.wikipedia.org/wiki/Bob_Dylan'
    picture: 'https://kelvinokaforart.com/wp-content/uploads/2023/01/Bob-Dylan.jpg'
    website: 'https://www.bobdylan.com/'
    gender: 'male'
    birthdate: '1941-05-24'
    zoneinfo: 'America/Chicago'
    locale: 'en-US'
    phone_number: '+1 (425) 555-1212'
    phone_extension: '1000'
    address:
      street_address: '2-3 Kitanomarukoen'
      locality: 'Chiyoda City'
      region: 'Tokyo'
      postal_code: '102-8321'
      country: 'Japan'
    extra:
      example: 'value'
```

The authentication is configured as [explained by Authelia](https://www.authelia.com/configuration/first-factor/file/).
