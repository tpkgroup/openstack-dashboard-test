# OpenStack Lab Dashboard

Static frontend demo designed to run from an Nginx container.

## Files
- index.html
- style.css
- script.js

## GitHub
Put these files at the root of your GitHub repository.

Then replace:
TEN_SV/TEN_REPO

with your actual GitHub repository, for example:

https://github.com/12345678/openstack-dashboard

## Container command

sh -c "apk add --no-cache git && rm -rf /usr/share/nginx/html/* && git clone https://github.com/TEN_SV/TEN_REPO /usr/share/nginx/html && nginx -g 'daemon off;'"

The repository should contain index.html at its root.
