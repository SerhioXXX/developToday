// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';

//Actions
import { postsActions } from '../../bus/posts/actions';
// Instruments
import Styles from './styles.m.css';

// Components
import { Catcher, Post } from '../../components';

const mapStateToProps = (state) => {
    return {
        post: state.post,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ viewCommentAsync: postsActions.viewCommentAsync }, dispatch),
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ReadPost extends Component {

    componentDidMount () {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~componentDidMount in ReadPost~~~~~~~~~~~~~~~~~~~~~~');
    }

    render () {
        const { actions, post } = this.props;

        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~this.props in ReadPost~~~~~~~~~~~~~~~~~~~~~~~~~~~', this.props);

        const postsJSX = (post) => {
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        //author = { data.get('author') }
                        body = { post.get('body') }
                        //created = { post.get('created') }
                        comments = { post.get('comments') }
                        id = { post.get('id') }
                        title = { post.get('title') }
                    />
                </Catcher>
            );
        };

        return (
            <section className = { Styles.posts }>
                <FlipMove>{postsJSX}</FlipMove>
                <p>{post.get('comments')}</p>
            </section>
        );
    }

/*
    render () {
        const { posts, id } = this.props;

        console.log('this.state Comments-------->>', posts);
        console.log('this.props Comments-------->>', this.props);

        return (
            <section>
                <h1>Комментарии: {id}</h1>
            </section>
        );
    }*/
}
