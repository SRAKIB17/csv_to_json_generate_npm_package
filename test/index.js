const fs = require('fs')

fs.readFile('test.csv', function (err, data) {
    if (err) {
        console.log(err)

    }
    else {
        const ff = data.toString()?.split('\n')
        const column = ff?.[0]?.split(',')
        console.log(column)
    }
});
