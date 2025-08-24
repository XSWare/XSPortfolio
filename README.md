## Summary

This repository contains the source code for the XSWare portfolio website. It is a single-page application built with React and Vite. The website is hosted on AWS, utilizing S3 for storage and CloudFront for content delivery.
The website can currently be reached at https://d3izzsp748t1h0.cloudfront.net/.

## Deploy

- build the project with `npm run build`  
- upload all the files from `/dist` to S3 bucket (`.env` can stay the same unless the API URL changes)
- adjust permissions for all the relevant files in the S3 bucket
- invalidate the cloud front cache  
TODO: automate this process