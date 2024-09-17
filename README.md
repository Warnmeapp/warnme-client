# Warnme

## Authentication

```shell
Error minting the cookie Credential implementation provided to initializeApp() via the "credential" property has insufficient permission to access the requested resource.
See https://firebase.google.com/docs/admin/setup for details on how to authenticate this SDK with appropriate permissions.
```

### Add role to service account
* Administrateur Cloud Functions
* Administrateur Firebase Authentication
* Agent du service administrateur le SDK Admin Firebase
* Consommateur d'utilisation du service
* Créateur de jetons du compte de service 

## Form generation

⚠️ Don't use ``useForm`` but rather ``defineForm`` from ``utils/vuetify`` it's the same exports except for the exposure of ``defineField`` which integrates state propagation for vuetify.
