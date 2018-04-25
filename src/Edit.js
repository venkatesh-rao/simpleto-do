import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            item: this.props.items
        }
        this.onEdit=this.onEdit.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    onEdit() {
        this.setState({disabled: !this.state.disabled});
    }

    onDelete() {

    }

    handleChange = e => {
        this.setState({item: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="checkbox" id={this.state.item}/>
                <input value={this.state.item} onChange={this.handleChange} disabled={this.state.disabled ? "disabled" : ""}/>
                <button onClick={this.onEdit}>Edit</button>
                <button onClick={this.onDelete}>Delete</button>
            </div>
        );
    }
}