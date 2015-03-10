# 中国DNS服务器列表

## 安装

### 通过NPM安装

`npm install chinese-dns-server-list`

## 使用示例

var dnsList = require('chinese-dns-server-list');

console.log(dnsList('A')); // IPv4 DNS 服务器列表
// => ["198.41.0.4", "192.228.79.201", ...]

console.log(dnsList('AAAA')); // IPv6 DNS 服务器列表
// => ["2001:503:BA3E::2:30", "2001:500:84::B", ...]

console.log(dnsList()); // 完整数据
//=> [{ A: '198.41.0.4', AAAA: '2001:503:ba3e::2:30', name: 'a.root-servers.net', text: '全球DNS根节点' }, ...]