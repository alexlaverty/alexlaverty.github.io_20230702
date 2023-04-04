---

---

## What is the difference between AWS parameter store and AWS secrets manager?

Both AWS Parameter Store and AWS Secrets Manager are used for storing and retrieving sensitive data, but they have different use cases.

AWS Parameter Store is primarily used for storing non-sensitive data like configuration parameters, app settings, and license codes. It can be used to store both plaintext and encrypted data, and can be accessed by EC2 instances, AWS Lambda functions, and other AWS services.

AWS Secrets Manager, on the other hand, is used for storing and retrieving secrets such as database passwords, API keys, and SSH keys. It encrypts the secrets at rest and in transit, and provides fine-grained access control, monitoring, and auditing capabilities. Secrets can be retrieved programmatically or through the AWS Management Console, and can be rotated automatically.

In summary, AWS Parameter Store is a simple key-value store for configuration data, while AWS Secrets Manager is a more robust and secure solution for managing secrets.