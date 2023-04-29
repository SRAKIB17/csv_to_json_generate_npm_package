# Version: 1.1.1

```
npm i csv_to_json_generate_file_or_remote
```

## Configure

1. csv file to json:

| parameter      | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| csv_path       | pass csv file path                                                         |
| destination    | Default `root folder`. You can pass destination like `json/test` or `json` |
| json_file_name | file name of json file. Default file name `test`                           |

``` javascript
// test.csv
`
"name","age","phone","test"
"Y",534534,1835434,true
"X",534534,5435355,true
`
import {csv_file_to_json_generate} from 'csv_to_json_generate_file_or_remote'

csv_file_to_json_generate({
    csv_path: 'test/test.csv',
    destination: '',
    json_file_name: 'test'
})
```

1. remote file to json:

| parameter      | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| url            | pass csv url                                                               |
| destination    | Default `root folder`. You can pass destination like `json/test` or `json` |
| json_file_name | file name of json file. Default file name `test`                           |

``` javascript
import {csv_to_json_generate_remotely} from 'csv_to_json_generate_file_or_remote'

csv_to_json_generate_remotely({
    url: 'https://www.w3schools.com/python/pandas/data.csv.txt'
    ,
    destination: '',
    json_file_name: 'test'
})

```