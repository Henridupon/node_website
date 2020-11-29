# What does a DNS server do?

The internet holds an incredible amount of data. Websites of cute kittens, a realtime overview of the latest elections, 
or in this case, a blog that contains some information you want to obtain. All websites have an Internet 
Protocol (IP) address, which is unique to get access to that page. Another way of accessing the 
website is by a DNS which stands for Domain Name System. 

A Domain Name System is a register that translates the name that you use in the URL, such as facebook (in the URL
https://www.facebook.com) to the IP address that it is attached to. 

## What is a URL?
Unified Resource Locator (URL) is a term that is often used interchangeably with domain name (DN) but this is not correct.
A domain name is a part of the URL. For example if you have the next URL: https://www.medium.com/@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54#.tmmgwlrcx
The 'www.medium.com' part is the domain name. The https:// is the protocol and the part after the domain name '@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54#.tmmgwlrcx' 
is the path.

## How does this work in practice?
For a user(client) to connect to a webserver the following steps will be taken.
1. The user will fill in the URL in the address bar which will request the website information.
2. Your computer will first try to look up the IP address in its own cache, because this information will be stored in
its cache when the site has been visited previously. If the information is not present, a request will be sent to the 
DNS server. These authoritative name servers are responsible for storing these records for their respective domain names.
3. The DNS server will search for the IP address in its cache, just like your computer. If it cannot find the IP address
in its cache, it looks elsewhere. The query then continues up the chain of authoritative DNS servers.
4. When a DNS server finds the IP address, it will be sent back to the user(client). The IP address will pass every 
authoritative DNS server in the chain, and they will store this in their cache. All DNS records have a Time To Live (TTL)
that when expired, will be ask for an updated copy of the record.
5. Your computer has received the IP address and stores in it its local cache. The IP address is used to connect to the
URL you typed into the web browser bar. 

The whole process of getting the IP address from the DNS servers normally takes milliseconds to collect. In some cases the
process takes longer but after the IP address is received, the website will load faster the next time you visit it, because
the IP address is locally cached.

# What are DNS records?

There is a great variety of DNS records available. One of the most common record type is the A record type. A records 
are the most basic

# What is an authoritative DNS server?

An authoritative DNS server stores DNS records. 


https://pressable.com/2019/10/11/what-are-dns-records-types-explained-2/#:~:text=A%20Records,should%20point%20and%20a%20TTL.
https://www.liquidweb.com/kb/how-to-demystify-the-dns-process/

