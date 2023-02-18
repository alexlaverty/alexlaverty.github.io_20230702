---

---
## What is the difference between "ssh-rsa" and "ssh-ed25519"

"ssh-rsa" and "ssh-ed25519" are two different algorithms used in SSH public key cryptography.

The "ssh-rsa" algorithm is one of the earliest public key cryptography algorithms used in SSH and is based on the RSA algorithm. It provides a secure method of authentication and encryption, but has some limitations in terms of speed and key size.

On the other hand, "ssh-ed25519" is a more recent addition to SSH and is based on the Edwards-curve Digital Signature Algorithm (EdDSA). It is considered to be more secure than "ssh-rsa" due to its smaller key size and the use of elliptic curve cryptography. It is also faster and provides better resistance against side-channel attacks.

In general, "ssh-ed25519" is the recommended choice for new deployments, as it offers improved security and performance compared to "ssh-rsa". However, "ssh-rsa" is still widely used and supported, and may be required in certain legacy systems or compatibility scenarios.

## what is the difference between known_hosts and authorized_keys ?

known_hosts and authorized_keys are files used by the SSH (Secure Shell) protocol.

known_hosts file contains the host keys of remote servers that the client has previously connected to and the client can use this file to verify the authenticity of the server.

authorized_keys file, on the other hand, contains the public keys of clients that are authorized to access the server. When a client tries to connect to the server, the server will check the client's public key against the keys listed in the authorized_keys file to determine whether the client is allowed to access the server or not.

In summary, known_hosts is used for server authentication by the client, while authorized_keys is used for client authentication by the server.