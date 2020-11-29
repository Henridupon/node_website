# What is HTTPS exactly?

Like all people who have not been living under a rock the last decade, you must have encountered the green padlock in
the URL when you are browsing the internet. This padlock will only be shown when you are visiting a website that is using
HTTPS. HTTP stands for Hypertext Transfer Protocol. The 'S' that has been added at the end of HTTP stands for Secure, and
specifically this refers to SSL, Secure Sockets Layer. This article covers SSL-encrypted connection and how
asymmetric and symmetric keys work together to make this type of encrypted connection possible.

![alt text](/public/images/blog/ssl/facebook_url_print_screen.png "Logo Title Text 1")

HTTPS means that all the information that is transferred between your browser(client), and the server is secured by
encryption. The SSL is important because it plays a role in building trust between the two involved parties, the client
and the server. An SSL certificate is a digital certificate that can be obtained by servers that marks the websites as
trustworthy. It is issued by a third party, the Certificate Authority or CA.

## How does this work in practice?
The next steps happens when you browse a secure website:
1. Your browser requests (encrypted/secure) information from a server.
2. The server sends its public key that contains the SSL certificate to your browser. This certificate has been granted
by the CA.
3. When your browser receives the certificate, it will check the validity of this certificate with the CA that had sent it
to the server.
4. If the certificate is valid, the CA will send this confirmation to your browser and the green padlock will appear
in the URL.
5. After this, the browser will create a symmetric key, these are actually two keys, which are 
also called a shared secret. It will send one of the two symmetric keys to the server. This key will be encrypted by 
the servers public key. 
6. When the server receives the encrypted shared key, it can decrypt the key by using its own private key for this.
From this point all the information that is send between the browser and the server can be encrypted and decrypted by
both parties because both parties have the keys to encrypt and decrypt messages.

Browsers only trust certificates that come from an organization on their list of trusted CAs. Every browser has a 
list, available at installation, of trusted CAs, known as the Trusted Root CA store. Most of the time you can find this
list in settings in your web browser under certificates. 

A green padlock does not always mean the website can be trusted. Everyone can add SSL to their website but using this
will make the information between the parties encrypted so eavesdroppers will not be able to read the messages when they
intercept these. 

