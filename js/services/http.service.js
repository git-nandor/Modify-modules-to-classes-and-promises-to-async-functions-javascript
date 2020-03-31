const http = (fetch => {

    const get = (url, headers) => {
        const config = {
            method: 'GET',
            headers: headers || {}
        };

        console.log('GET', url);

        return fetch(url, config)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject({
                        status: response.status,
                        message: response.statusText
                    });
                }
                return response.json();
            })
            .then(response => {
                return _delay(response);
            });
    }

    const _delay = response => {
        return new Promise(resolve => {
            setTimeout(resolve.bind(null, response), parseInt(Math.random() * 2000 + 500));
        });
    }

    let getQueryString = params => {
        return Object.keys(params)
            .filter(key => { return !!params[key] })
            .map(key => { return `${key}=${params[key]}` }).join('&');
    }

    const notImplemented = (url, headers) => {
        return Promise.reject('Not implemented');
    }

    return {
        get: get,
        post: notImplemented,
        delete: notImplemented,
        getQueryString: getQueryString
    };

})(window.fetch);
