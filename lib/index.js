/**
 * Created by 文琪 on 2015/3/10.
 * 代码框架来自：https://github.com/silverwind/root-hints/blob/master/index.js
 */

var cernet = require("./cernet-servers.json");

var servers = [];
servers.push(cernet);
module.exports = function dnsList(type) {
    if (type === "A" || type === "AAAA") {
        var records = [];
        servers.forEach(function (ser) {
            if (ser[type]) {
                records.push(ser[type]);
            }
        });
        return records;
    } else if (type === undefined) {
        return servers;
    } else {
        throw new Error("Unknown record type: " + type);
    }
};