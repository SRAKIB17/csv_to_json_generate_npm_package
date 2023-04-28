const fs = require('fs')
const csvFile = fs.openSync('test.json', 'w+')
// fs.close
// console.log(csvFile)

// fs.readFile('test.csv', function (err, data) {
//     if (err) {
//         console.log(err)

//     }
//     else {
//         const ff = data.toString()?.split('\n')
//         const column = ff?.[0]?.split(',')
//         const ar = Array()
//         for (const x of ff.slice(1)) {
//             const d = Object()
//             const rowData = x?.split(',')
//             if (rowData.length == column?.length) {
//                 column?.forEach((c, index) => {
//                     d[c] = rowData?.[index]
//                 })
//                 ar.push(d)
//             }
//         }
//     }
// });
