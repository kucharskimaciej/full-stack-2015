# Day 1

## Remy Sharep - JSBIN

Spam problems

- DDoS attacks, 
- images with no src request the page itself - resolved with 204 No Content response; 
- SEO spam - X-Robots: no-follow

Police problems - phishing, illegal content being pasted in (handle ad hoc)

Selling stuff on internet: different VAT, problems with EU. Fees for accepting stolen card.


## RxJS -- Live coding a fully reactive UI

http://rxmarbles.com
https://github.com/Reactive-Extensions/RxJS
https://github.com/guardian/grid-inspector
https://github.com/theefer/infinite-scroll-ngrxjs

http://slides.com/theefer/reactive-uis

## Scaling nodejs apps with microservices

Monitoring and health checks.
An amqplib using rxjs?

cote.js - service discovery, load-balancer, http, pub-sub, monitoring

## Performance scaling crash course (Dustin Whittle)

Under 100ms is not noticeable. Over 2s is not acceptable.

### baseline performance
Static vs Hello World vs Applications

### testing tools
Balance throughput and response times;

- Apache Bench
Requests/s and average response time on HTTP.

- Siege

- Bees with Machine Guns
Creating distributed load tests

- locust.io
test scenario, ui

- Gatiling.io
- Wrk
- Vegeta
- Tsung

### Client-side performance testing

- google pagespeed insights (npm install psi)
- ngx_pagespeed

- wbench (gem install wbench)
- webpagetest.org
- sitespeed.io

- apica
- blitz.io
- blazeMeter
- NetFlix Simian Army + Chaos Monkey

### How failures impact performance

- cache failure?






