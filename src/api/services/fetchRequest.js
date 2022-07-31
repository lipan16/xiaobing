function myFetch(url, method = 'POST', data){
    let body = ''
    for(let key in data){
        console.log(key)
        body += key + '=' + data[key] + '&'
        console.log(body)
    }
    body = body.slice(0, -1)

    return fetch(url, {
        method,
        credentials: 'include', // 每次都带上 cookies
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: ['get', 'GET', 'head', 'HEAD'].includes(method) ? null : body // get 或者head 提交的请求不能有body。数据格式key=val&key=val&key=val
    }).then(res => res.json())
}

export default myFetch
