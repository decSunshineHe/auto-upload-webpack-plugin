# upload-server-webpack-plugin

> Upload the packaged resources to the server based on node-ssh.

### Install

```shell
$ npm install --save-dev upload-server-webpack-plugin
```

### Usage

In `webpack.prod.config.js`:

```js
import UploadServerPlugin from "upload-server-webpack-plugin";

export default {
  // This script will be ran after building
  ...
  plugins: [
    ...
    new UploadServerPlugin({
      host: "xxx.xxx.x.xx", // server host ip
      port: '22', // server host port
      username: "root",
      password: "123456",
      remotePath: "/home/",
    }),
    ...
  ],
  ...

```
