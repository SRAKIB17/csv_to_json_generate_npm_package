
import http, { get as httpGet } from 'http'
import https, { get as httpsGet } from 'https'
import { createWriteStream, fstatSync, openSync, readFile, readFileSync, writeFile, close } from 'fs'

const csv_file_to_json_generate = ({ csv_path, json_file_name = 'test', destination }: { csv_path: string, json_file_name: string, destination: string }) => {
    readFile(csv_path, function (err, data) {
        if (err) {
            return { success: false, message: 'Something is wrong' }
        }
        else {
            const convertStr = data.toString()?.split('\n')
            const column = convertStr?.[0]?.split(',')
            const arr = Array()
            for (const x of convertStr.slice(1)) {
                const obj = Object()
                const rowData = x?.split(',')
                if (rowData.length == column?.length) {
                    column?.forEach((c, index) => {
                        const columnReplace = (c?.[0] == '"' && c?.[c.length - 1] == '"') ? c?.slice(1, -1) : c

                        const rowDataReplace = rowData?.[index]
                        if (rowDataReplace?.[0] == '"' && rowDataReplace?.[rowDataReplace.length - 1] == '"') {
                            obj[columnReplace] = rowDataReplace?.slice(1, -1)
                        }
                        else {
                            obj[columnReplace] = rowDataReplace
                        }

                    })
                    arr.push(obj)
                }
            }
            const path = (Boolean(destination) ? (destination + '/') : "") + json_file_name + ".json"
            const jsonFile = openSync(path, 'w+');
            writeFile(jsonFile, JSON.stringify(arr), { flag: 'w+' }, function (data) {
                close(jsonFile, (err) => {
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
            })

        }
    });
    // return ()
}



const csv_to_json_generate_remotely = ({ url, json_file_name = 'test', destination }: { url: string, json_file_name: string, destination: string }) => {
    if (url.includes('https')) {
        httpsGet(url, response => {

            response.on('data', function (chunk) {
                const convertStr = chunk.toString()?.split('\n')

                const column = convertStr?.[0]?.split(',')
                const arr = Array()

                for (const x of convertStr.slice(1)) {
                    const obj = Object()
                    const rowData = x?.split(',')
                    if (rowData.length == column?.length) {
                        column?.forEach((c: any, index: number) => {
                            obj[c] = rowData?.[index]
                        })
                        arr.push(obj)
                    }
                }
                const path = (Boolean(destination) ? (destination + '/') : "") + json_file_name + ".json"
                const jsonFile = openSync(path, 'w+');
                writeFile(jsonFile, JSON.stringify(arr), { flag: 'w+' }, function (data) {
                    close(jsonFile, (err) => {
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
                })

            })
        });
    }
    else {
        httpGet(url, response => {

            response.on('data', function (chunk) {
                const convertStr = chunk.toString()?.split('\n')
                const column = convertStr?.[0]?.split(',')
                const arr = Array()

                for (const x of convertStr.slice(1)) {
                    const obj = Object()
                    const rowData = x?.split(',')
                    if (rowData.length == column?.length) {
                        column?.forEach((c: any, index: number) => {
                            obj[c] = rowData?.[index]
                        })
                        arr.push(obj)
                    }
                }
                const path = (Boolean(destination) ? (destination + '/') : "") + json_file_name + ".json"
                const jsonFile = openSync(path, 'w+');
                writeFile(jsonFile, JSON.stringify(arr), { flag: 'w+' }, function (data) {
                    close(jsonFile, (err) => {
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
                })

            })
        });
    }
}

export { csv_file_to_json_generate, csv_to_json_generate_remotely }