/*
var main = (function(profileService, postService, commentService) {

    var template = `<main>
        <h1>My posts</h1>
        <div id="main">Loading...</div>
    </main>`;

    var init = function() {
        return fetchPosts();
    }

    var fetchPosts = function(top, skip) {
        return profileService.fetchProfile()
            .then(function(profile) {
                return profile.id;
            })
            .then(function(id) {
                return postService.fetchPosts(id, top, skip);
            })
            .then(function(posts) {
                _renderPosts(posts);
                return posts;
            })
            .then(function(posts) {

                var comments = posts.map(function(post) {
                    return commentService.fetchComments(post.id).then(function(comments) {
                        _renderComments(comments);
                    });
                });

                return Promise.all(comments);
            });
    }

    var _renderPosts = function(posts) {
        var main = document.getElementById('main');
        var postElements = posts
            .map(function(post) {
                return `<div class="post post-${post.id}">
                    <div class="title">${post.title}</div>
                    <div class="body">${post.body}</div>
                    <div class="comments">Loading...</div>
                </div>`;
            })
            .join('');

        if (main.innerHTML && main.innerHTML !== 'Loading...') {
            main.innerHTML += postElements;
        } else {
            main.innerHTML = postElements;
        }
        
    }

    var _renderComments = function(comments) {
        if (!comments || !comments[0]) {
            return;
        }

        var id = comments[0].postId;
        var commentSection = document.querySelector(`.post-${id} .comments`);
        var commentElements = comments
            .map(function(comment) {
                return `<div class="comment">
                    <div class="name">${comment.name} <span class="email">${comment.email}</span></div>
                    <div class="comment-body">${comment.body}</div>
                </div>`
            })
            .join('');

        if (commentSection.innerHTML && commentSection.innerHTML !== 'Loading...') {
            commentSection.innerHTML += commentElements;
        } else {
            commentSection.innerHTML = commentElements;
        }
    }

    return {
        init: init,
        template: template,
        fetchPosts: fetchPosts
    };

})(ProfileService, PostService, CommentService);
*/

class mainClass {
    constructor(ProfileService, PostService, CommentService){
        this.ProfileService = ProfileService
        this.PostService = PostService
        this.CommentService = CommentService
    }

    template = `<main>
        <h1>My posts</h1>
        <div id="main">Loading...</div>
    </main>`

    init() {
        return this.fetchPosts();
    }

    fetchPosts = async (top, skip) => {

        const profile = await this.ProfileService.fetchProfile();
        const posts = await this.PostService.fetchPosts(profile.id, top, skip);
        this._renderPosts(posts);

        for (const post of posts) {
            const comments = await this.CommentService.fetchComments(post.id);
            this._renderComments(comments);
        }
    }

    _renderPosts(posts) {
        const main = document.getElementById('main');
        let postElements = posts
            .map(post => {
                return `<div class="post post-${post.id}">
                    <div class="title">${post.title}</div>
                    <div class="body">${post.body}</div>
                    <div class="comments">Loading...</div>
                </div>`;
            })
            .join('');

        if (main.innerHTML && main.innerHTML !== 'Loading...') {
            main.innerHTML += postElements;
        } else {
            main.innerHTML = postElements;
        }
        
    }

    _renderComments(comments) {
        if (!comments || !comments[0]) {
            return;
        }

        const id = comments[0].postId;
        const commentSection = document.querySelector(`.post-${id} .comments`);
        let commentElements = comments
            .map(comment => {
                return `<div class="comment">
                    <div class="name">${comment.name} <span class="email">${comment.email}</span></div>
                    <div class="comment-body">${comment.body}</div>
                </div>`
            })
            .join('');

        if (commentSection.innerHTML && commentSection.innerHTML !== 'Loading...') {
            commentSection.innerHTML += commentElements;
        } else {
            commentSection.innerHTML = commentElements;
        }
    }
}

const main = new mainClass(ProfileService, PostService, CommentService);