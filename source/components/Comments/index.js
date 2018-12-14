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
const mapStateToProps = (state) => {
    return {
        posts: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ viewCommentAsync: postsActions.viewCommentAsync }, dispatch),
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Comments extends Component {

    componentDidMount () {
        const { actions, id, posts } = this.props;

        console.log('componentDidMount in Comments : actions, id =========>', actions, id, posts);
        actions.viewCommentAsync(id);
    }

    render () {
        const { posts, id } = this.props;

        console.log('this.state Comments-------->>', posts);
        console.log('this.props Comments-------->>', this.props);

        return (
            <section>
                <h1>Комментарии: {id}</h1>
            </section>
        );
    }
}
