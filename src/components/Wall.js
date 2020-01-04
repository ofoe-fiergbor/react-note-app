import React, { Component } from 'react'
import NoteGrid from './NoteGrid'

class Wall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: []
        }
    }
    add = (text) => {
        var arr = this.state.comment
        arr.push(text)
        this.setState({ comment: arr })
    }


    removeComment = (i) => {
        var arr = this.state.comment
        arr.splice(i, 1)
        this.setState({
            comment: arr
        })
    }
    updateComment = (newText, i) => {
        var arr = this.state.comment
        arr[i] = newText
        this.setState({ comment: arr })
    }
    commentMap = (text, i) => {
        return <NoteGrid key={i} index={i} text={text}
            removeCommentText={this.removeComment}
            updateCommentText={this.updateComment} />
    }

    render() {
        return (
            <div>
                <h1 className='navbar text-center'>Note App</h1>
                <div className='row'>
                    <div className="col-md-4 col-sm-3 col-xs-1"></div>
                    <div className="col-md-4 col-sm-6 col-xs-10 test">
                        <div className="row">
                            <div className="col-md-10"><h3>Add New Note</h3></div>
                            <div className="col-md-2">
                                <button className='addBtn' onClick={this.add.bind(null, 'Click Edit to add Note')}>
                                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                        {
                            this.state.comment.map(this.commentMap)
                        }
                    </div>
                    <div className="col-md-4 col-sm-3 col-xs-1"></div>
                </div>
            </div>
        )
    }
}

export default Wall
