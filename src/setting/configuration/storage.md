# Storage

The storage servers receive shares from the proxy and then store them. Two types of storage are available, and the choice is made in the [configuration](setting/configuration/README.md).

## Disk (Default)
The shares are directly stored on the disk where the storage server runs.

## S3
The shares are sent to an S3 instance. For this mode, three environment variables are required:
- `AWS_ACCESS_KEY_ID=<id of the S3 access key>`
- `AWS_SECRET_ACCESS_KEY=<secret key for the S3 instance>`
- `AWS_REGION=<region of the S3 instance>`

These environment variables are from AWS but work even if the S3 instance is not an AWS instance.
