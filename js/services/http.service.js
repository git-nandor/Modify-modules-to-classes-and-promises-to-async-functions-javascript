/*const http = (fetch => {

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
*/

class httpClass {
/*
    constructor(fetch) {
        this.fetch = fetch;
    }
*/

    get = async (url, headers) => {
        const config = {
            method: 'GET',
            headers: headers || {}
        };

        // miért nem this.fetch?
        let response = await fetch(url, config);
        // ez nem állítódik be magától mikor fetch-elek?
        if (!response.ok) {
            response = Promise.reject({
                status: response.status,
                message: response.statusText
            });
        } else response = response.json();

        response = await this._delay(response);

        return response;
    }

    _delay(response) {
        return new Promise(resolve => {
            setTimeout(resolve.bind(null, response), parseInt(Math.random() * 2000 + 500));
        });
    }

    getQueryString(params) {
        return Object.keys(params)
            .filter(key => { return !!params[key] })
            .map(key => { return `${key}=${params[key]}` }).join('&');
    }

    post(url, headers) {
        return Promise.reject('Not implemented');
    }

    delete(url, headers) {
        return Promise.reject('Not implemented');
    }
}

const http = new httpClass(/*window.fetch*/);
