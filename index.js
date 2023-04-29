"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csv_to_json_generate_remotely = exports.csv_file_to_json_generate = void 0;
var http_1 = require("http");
var https_1 = require("https");
var fs_1 = require("fs");
var csv_file_to_json_generate = function (_a) {
    var csv_path = _a.csv_path, _b = _a.json_file_name, json_file_name = _b === void 0 ? 'test' : _b, destination = _a.destination;
    (0, fs_1.readFile)(csv_path, function (err, data) {
        var _a, _b;
        if (err) {
            return { success: false, message: 'Something is wrong' };
        }
        else {
            var convertStr = (_a = data.toString()) === null || _a === void 0 ? void 0 : _a.split('\n');
            var column = (_b = convertStr === null || convertStr === void 0 ? void 0 : convertStr[0]) === null || _b === void 0 ? void 0 : _b.split(',');
            var arr = Array();
            var _loop_1 = function (x) {
                var obj = Object();
                var rowData = x === null || x === void 0 ? void 0 : x.split(',');
                if (rowData.length == (column === null || column === void 0 ? void 0 : column.length)) {
                    column === null || column === void 0 ? void 0 : column.forEach(function (c, index) {
                        var columnReplace = ((c === null || c === void 0 ? void 0 : c[0]) == '"' && (c === null || c === void 0 ? void 0 : c[c.length - 1]) == '"') ? c === null || c === void 0 ? void 0 : c.slice(1, -1) : c;
                        var rowDataReplace = rowData === null || rowData === void 0 ? void 0 : rowData[index];
                        if ((rowDataReplace === null || rowDataReplace === void 0 ? void 0 : rowDataReplace[0]) == '"' && (rowDataReplace === null || rowDataReplace === void 0 ? void 0 : rowDataReplace[rowDataReplace.length - 1]) == '"') {
                            obj[columnReplace] = rowDataReplace === null || rowDataReplace === void 0 ? void 0 : rowDataReplace.slice(1, -1);
                        }
                        else {
                            obj[columnReplace] = rowDataReplace;
                        }
                    });
                    arr.push(obj);
                }
                console.log(arr);
            };
            for (var _i = 0, _c = convertStr.slice(1); _i < _c.length; _i++) {
                var x = _c[_i];
                _loop_1(x);
            }
            var path = (Boolean(destination) ? (destination + '/') : "") + json_file_name + ".json";
            var jsonFile_1 = (0, fs_1.openSync)(path, 'w+');
            (0, fs_1.writeFile)(jsonFile_1, JSON.stringify(arr), { flag: 'w+' }, function (data) {
                (0, fs_1.close)(jsonFile_1, function (err) {
                    if (err)
                        console.error("Failed to close file", err);
                    else {
                        console.log("File Closed successfully");
                        try {
                        }
                        catch (err) {
                            console.error("Cannot find stats of file", err);
                        }
                    }
                });
            });
        }
    });
    // return ()
};
exports.csv_file_to_json_generate = csv_file_to_json_generate;
var csv_to_json_generate_remotely = function (_a) {
    var url = _a.url, _b = _a.json_file_name, json_file_name = _b === void 0 ? 'test' : _b, destination = _a.destination;
    if (url.includes('https')) {
        (0, https_1.get)(url, function (response) {
            response.on('data', function (chunk) {
                var _a, _b;
                var convertStr = (_a = chunk.toString()) === null || _a === void 0 ? void 0 : _a.split('\n');
                console.log(convertStr);
                var column = (_b = convertStr === null || convertStr === void 0 ? void 0 : convertStr[0]) === null || _b === void 0 ? void 0 : _b.split(',');
                var arr = Array();
                var _loop_2 = function (x) {
                    var obj = Object();
                    var rowData = x === null || x === void 0 ? void 0 : x.split(',');
                    if (rowData.length == (column === null || column === void 0 ? void 0 : column.length)) {
                        column === null || column === void 0 ? void 0 : column.forEach(function (c, index) {
                            obj[c] = rowData === null || rowData === void 0 ? void 0 : rowData[index];
                        });
                        arr.push(obj);
                    }
                };
                for (var _i = 0, _c = convertStr.slice(1); _i < _c.length; _i++) {
                    var x = _c[_i];
                    _loop_2(x);
                }
                var path = (Boolean(destination) ? (destination + '/') : "") + json_file_name + ".json";
                var jsonFile = (0, fs_1.openSync)(path, 'w+');
                (0, fs_1.writeFile)(jsonFile, JSON.stringify(arr), { flag: 'w+' }, function (data) {
                    (0, fs_1.close)(jsonFile, function (err) {
                        if (err)
                            console.error("Failed to close file", err);
                        else {
                            console.log("File Closed successfully");
                            try {
                            }
                            catch (err) {
                                console.error("Cannot find stats of file", err);
                            }
                        }
                    });
                });
            });
        });
    }
    else {
        (0, http_1.get)(url, function (response) {
            response.on('data', function (chunk) {
                var _a, _b;
                var convertStr = (_a = chunk.toString()) === null || _a === void 0 ? void 0 : _a.split('\n');
                console.log(convertStr);
                var column = (_b = convertStr === null || convertStr === void 0 ? void 0 : convertStr[0]) === null || _b === void 0 ? void 0 : _b.split(',');
                var arr = Array();
                var _loop_3 = function (x) {
                    var obj = Object();
                    var rowData = x === null || x === void 0 ? void 0 : x.split(',');
                    if (rowData.length == (column === null || column === void 0 ? void 0 : column.length)) {
                        column === null || column === void 0 ? void 0 : column.forEach(function (c, index) {
                            obj[c] = rowData === null || rowData === void 0 ? void 0 : rowData[index];
                        });
                        arr.push(obj);
                    }
                };
                for (var _i = 0, _c = convertStr.slice(1); _i < _c.length; _i++) {
                    var x = _c[_i];
                    _loop_3(x);
                }
                var path = (Boolean(destination) ? (destination + '/') : "") + json_file_name + ".json";
                var jsonFile = (0, fs_1.openSync)(path, 'w+');
                (0, fs_1.writeFile)(jsonFile, JSON.stringify(arr), { flag: 'w+' }, function (data) {
                    (0, fs_1.close)(jsonFile, function (err) {
                        if (err)
                            console.error("Failed to close file", err);
                        else {
                            console.log("File Closed successfully");
                            try {
                            }
                            catch (err) {
                                console.error("Cannot find stats of file", err);
                            }
                        }
                    });
                });
            });
        });
    }
};
exports.csv_to_json_generate_remotely = csv_to_json_generate_remotely;
