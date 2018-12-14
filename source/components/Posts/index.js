// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';

// Instruments
import Styles from './styles.m.css';

// Components
import { Catcher, Post } from '../../components';

//Actions
import { postsActions } from '../../bus/posts/actions';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ fetchPostsAsync: postsActions.fetchPostsAsync,
            viewPostAsync:   postsActions.viewPostAsync }, dispatch),
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Posts extends Component {

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
    }

    render () {
        const { actions, posts } = this.props;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        //author = { post.get('author') }
                        body = { post.get('body') }
                        //created = { post.get('created') }
                        comments = { post.get('comments') }
                        id = { post.get('id') }
                        title = { post.get('title') }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.posts }>
                <FlipMove>{postsJSX}</FlipMove>
            </section>
        );
    }
}

/*
    static defaultProps = {
        // State
        isFetching: false,

        // Actions
        updatePasswordAsync: () => {},
    };*/
/*
    static defaultProps = {
        // State
        isOnline: false,
    };
    */
