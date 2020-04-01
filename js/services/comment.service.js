/*const CommentService = (http => {

    fetchComments = (postId, top, skip) => {
        const params = {
            postId: postId,
            _limit: top || 4,
            _start: skip || 0
        };

        return http.get(`https://jsonplaceholder.typicode.com/comments?${http.getQueryString(params)}`);
    }

    return {
        fetchComments: fetchComments
    };

})(http);
*/

class CommentServiceClass {

    constructor(http) {
        this.http = http;
    }

    fetchComments(postId, top, skip) {
        const params = {
            postId: postId,
            _limit: top || 4,
            _start: skip || 0
        };

        return http.get(`https://jsonplaceholder.typicode.com/comments?${http.getQueryString(params)}`);
    }
}

const CommentService = new CommentServiceClass(http);