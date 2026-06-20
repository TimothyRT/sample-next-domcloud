This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Deploy on DOM Cloud

### Set up host

Create a DOMCloud instance with the following recipe:
```yaml
source: clear
features:
  - bun latest
nginx:
  root: public_html
  passenger:
    enabled: "on"
    app_start_command: env PORT=$PORT .next/standalone/server.js
  locations:
    - match: /_next/static/
      alias: public_html/.next/static/
```

SSH into the DOMCloud host; do `ssh-keygen` there to generate a public/private key pair; skip the 'Enter file in which to save the key' and 'Enter passphrase for' part.

The extensionless file inside .ssh is your private key (should look like the following example); copy the text and delete the file.

Rename the .pub file (your public key) into authorized_keys (leave no extension).

### Secrets

Add the necessary repository secrets to:
- https://github.com/username/repository/settings/secrets/actions

Add the private key from before (under the name `SSH_KEY`)

Add the DOMCloud host (under the label `SSH_HOST`), for example osk.domcloud.co

Add the DOMCloud site-specific username (under the label `SSH_USER`)

### 

Edit anything in the project and commit to GitHub; the build workflow should now be performed automatically!

Visit the Actions page of your repository
https://github.com/username/repository/actions
