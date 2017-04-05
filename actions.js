const request = require('request-promise')
const {encodeQuery} = require('./helper')

exports.fetchShows = function () {
    const URL = 'http://b2cqq.show.wepiao.com/items'
    const data = {
        city_name: '深圳',
        page: 1,
        per_page: 5000,
        type_pid: 'ff8080814a7ad6f1014a7adb6b540002',
    }
    const url = encodeQuery(URL, data)

    return request(url)
}