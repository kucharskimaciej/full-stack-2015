# Microservices -- talk by Richard Roger

example: `https://github.com/rjrodger/nodezoo`

- message orientated architecture
- role/cmd patterns
- messages: synchronous/asynchronous and consumer/observed
- senecajs.org

## Considerations

- drop service instance if it’s slowness creates problem
- measure message flow rates to notice lost actions
- don’t use message-schema: fails with multiversion deployment
- drop messages that are out of date -- will get rid of poison messages (have a queue that holds messages that are outdated)
- idempotency of messages wherever you can
- have a kill-switch
- make sure that you use a resilient message broker; consider apache.kafka
