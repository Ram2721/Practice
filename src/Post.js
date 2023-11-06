import React from "react";

function Post(props) {
    let posts = props.data;

    return(
        <div>
            {
                posts.map((post) => {
                    console.log(post.image);
                    return(
                        <div class="row post">
                            {/* image */}
                            <img class="profile-pic" src={post.image}/>
                            {/* name and post's message */}
                            <div class="column">
                                <div class="user-name">{post.name}</div>
                                <div className="post-message">{post.message}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post;