```shell
asdf local nodejs 16.15.1
```

```shell
npm install -g npm@8
npm cache clear --force
```

```shell
npm install -g typescript
npm install -g ts-node
npm install -g mongo-migrate-ts

npm install --save-dev @types/node
npm install --save-dev mongo-migrate-ts
```

```shell
asdf reshim nodejs
```

```shell
mongo-migrate init
mongo-migrate status
mongo-migrate new --name {action}
```

```shell
ts-node cli.ts up
ts-node cli.ts down --last
ts-node cli.ts down --all
ts-node cli.ts status
ts-node cli.ts new --name {action}
```

#### tools
[ ] https://www.npmjs.com/package/migrate-mongo
[X] https://www.npmjs.com/package/mongo-migrate-ts