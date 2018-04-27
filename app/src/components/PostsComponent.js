import React from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'reactstrap';

const PostsComponent = (posts) => {
    if(posts.length == 0) return null;
    let postsListComponent = posts.map(post => {
        return (
            <div>
                <Card body inverse color="info">
                    <CardHeader>Post #{(post.id) + 1}</CardHeader>
                    <CardText>{post.text}</CardText>
                </Card>
                <br />
            </div>
        );
    });

    return postsListComponent;
}

export default PostsComponent;