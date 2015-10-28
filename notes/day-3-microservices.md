# Microservices at RisingStack

1. Build monolith first
2. Add new features as microservices around that monolith
3. Split the slower parts of monolith into microservices


## How?

### Building

- you need to define format (JSON?)
- koa/hapijs
- rabbitmq/mqtt/nsq
- design for failure
    - idempotency (ie. attach action_id to the message)
    - circut breaker -- npm/package/levee


### Shipping

- proper automation
- jenkins/codeship/travis

### Operating

- monitoring and alerting
    - monitoring the obama campaign dylan richard
    - stack traces?
    - transaction tracking?
    - trace.risingstack.com
- monitor everything

## Notes
microservice weekly

