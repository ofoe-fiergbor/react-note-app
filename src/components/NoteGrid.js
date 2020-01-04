import React, { Component } from 'react'




class NoteGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
        }
    }


    handleEdit = (e) => {
        this.setState({
            edit: true
        })
    }

    handleRemove = () => {
        this.props.removeCommentText(this.props.index)
    }
    handleSave = () => {
        var val = this.refs.newText.value
        this.props.updateCommentText(val, this.props.index)
        this.setState({
            edit: false
        })
    }
    renderNormal = () => {
        return (
            <div className='noteRender'>
                <div className="dash"></div>
                <p> {this.props.text} </p>
                <button onClick={this.handleEdit} type="button" className="addBtn2">
                    <span class="glyphicon glyphicon-pencil edit " aria-hidden="true"></span>
                </button>
                <button onClick={this.handleRemove} type="button" className="addBtn2">
                    <span class="glyphicon glyphicon-remove remove " aria-hidden="true"></span>
                </button>
                <div className="dash"></div>
            </div>
        )
    }
    renderForm = () => {
        return (
            <div className='noteRender'>
                <div className="dash"></div>
                <form>
                    <textarea ref='newText' defaultValue={this.props.text} className='formCustom' rows='4'></textarea>
                    <button onClick={this.handleSave} type="button" className="addBtn2">
                    <span class="glyphicon glyphicon-ok ok " aria-hidden="true"></span>
                    </button>
                </form>
                <div className="dash"></div>
            </div>
        )

    }
    render() {
        return this.state.edit ? this.renderForm() : this.renderNormal()
    }
}

export default NoteGrid
