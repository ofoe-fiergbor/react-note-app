import React, { Component } from 'react'



class NoteGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
        }
    }



    handleEdit = (e) => {
        this.setState({edit: true})
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
            <div className='noteRender test test2'>
                <p> {this.props.text} </p>
                <div className="row">
                    <div className="col-md-6">
                    <button onClick={this.handleEdit} type="button" className="addBtn2">
                    <span class="glyphicon glyphicon-pencil edit text-right " aria-hidden="true"></span>
                </button>
                    </div>
                    <div className="col-md-6">
                    <button onClick={this.handleRemove} type="button" className="addBtn2">
                    <span class="glyphicon glyphicon-remove remove text-left" aria-hidden="true"></span>
                </button>
                    </div>
                </div>
            </div>
        )
    }
    renderForm = () => {
        return (
            <div className='noteRender test '>
                <form>
                    <textarea ref='newText' defaultValue={this.props.text} className='formCustom' rows='4'></textarea>
                    <button onClick={this.handleSave} type="button" className="addBtn2">
                        <span class="glyphicon glyphicon-ok ok " aria-hidden="true"></span>
                    </button>
                </form>
            </div>
        )

    }
    render() {
        return this.state.edit ? this.renderForm() : this.renderNormal()
    }
}

export default NoteGrid
