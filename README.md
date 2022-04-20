# auto-upload-webpack-plugin

> Upload the packaged resources to the server based on node-ssh.

### Install

```shell
$ npm install --save-dev auto-upload-webpack-plugin
```

### Usage

In `webpack.prod.config.js`:

```js
import AutoUploadPlugin from "auto-upload-webpack-plugin";

export default {
  // This script will be ran after building
  ...
  plugins: [
    ...
    new AutoUploadPlugin({
      host: "xxx.xxx.x.xx", // server host ip
      username: "root",
      password: "123456",
      remotePath: "/home/",
    }),
    ...
  ],
  ...

```
