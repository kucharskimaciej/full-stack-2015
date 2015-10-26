# Debugging node

node debug index.js

## V8 heap

`npm install heapdump`

heapdumps can be opened and analyzed in chrome-dev-tools

## Health Center

## Garbage Collection analysis

`node --expose-gc -trace-gc ....`

Can be explored via eclipse plugin GCMV

## Node-inspector npm
must run node with --debug flag

## OS Core dumpds
```
node --abort-on-uncaugbt-exception
```

on linux add: `ulimit -u unlimited`

## Core dumps-gdb
To see problems in native modules

## Core dump IDDE

Another Eclipse Tool. Takes a core dump and let's you analyze memory usage in detail.

