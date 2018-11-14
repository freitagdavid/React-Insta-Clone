import React from 'react';
import PostBody from './PostBody';
import PostUserInfo from './PostUserInfo';
import PropTypes from 'prop-types';
import './PostContainer.sass';

const PostContainer = (props) => {
    return (
        <div className="post-container">
            <PostUserInfo username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
            <PostBody post={props.post} likes={props.likes} index={props.index} />
        </div>
    );
};

PostContainer.propTypes = {
    post : PropTypes.shape({
        username     : PropTypes.string,
        thumbnailUrl : PropTypes.string,
        imageUrl     : PropTypes.imageUrl,
        likes        : PropTypes.number,
        timestamp    : PropTypes.string,
        comments     : PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    })
};

export default PostContainer;
