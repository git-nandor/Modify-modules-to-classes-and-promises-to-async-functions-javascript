const PostService = (http => {

    fetchPosts = (userId, top, skip) => {
        const params = {
            userId: userId,
            _limit: top || 3,
            _start: skip || 0
        };

        return http.get(`https://jsonplaceholder.typicode.com/posts?${http.getQueryString(params)}`);
    }

    return {
        fetchPosts: fetchPosts
    };

})(http);



/*
class PostServiceClass {

    constructor(http) {
        this.http = http;
    }

    fetchPosts (userId, top, skip) {
        const params = {
            userId: userId,
            _limit: top || 3,
            _start: skip || 0
        }

        return this.http.get(`https://jsonplaceholder.typicode.com/posts?${this.http.getQueryString(params)}`);
    }

}

const PostService = new PostServiceClass(http);

*/



