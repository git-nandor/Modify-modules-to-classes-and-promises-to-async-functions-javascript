const main = ((profileService, postService, commentService) => {

    const template = `<main>
        <h1>My posts</h1>
        <div id="main">Loading...</div>
    </main>`;

    const init = () => {
        return fetchPosts();
    }

    const fetchPosts = async (top, skip) => {
/*
        const profile = await profileService.fetchProfile();
        const posts = await postService.fetchPosts(profile.id, top, skip);
        _renderPosts(posts);
        let comments = posts.map(post => {
            return async () => {
                const comments = await commentService.fetchComments(post.id);
                _renderComments(comments);
            }
            

           // return commentService.fetchComments(post.id).then(comments => {
           //     _renderComments(comments);
           // });
        });

        return await Promise.all(comments);
*/
        return profileService.fetchProfile()
            .then(profile => {
                return profile.id;
            })
            .then(id => {
                return postService.fetchPosts(id, top, skip);
            })
            .then(posts => {
                _renderPosts(posts);
                return posts;
            })
            .then(posts => {

                let comments = posts.map(post => {
                    return commentService.fetchComments(post.id).then(comments => {
                        _renderComments(comments);
                    });
                });

                return Promise.all(comments);
            });
    }

    const _renderPosts = posts => {
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

    let _renderComments = comments => {
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

    return {
        init: init,
        template: template,
        fetchPosts: fetchPosts
    };

})(ProfileService, PostService, CommentService);
