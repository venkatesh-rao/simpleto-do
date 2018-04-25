import React from 'react';
import Todo from './Todo';

export default class Additem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{text: 'hello', id: Date.now()}],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        
        if (!this.state.text.length) {
          return;
        }

        const newItem = {
          text: this.state.text,
          id: Date.now()
        };

        this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          text: ''
        }));
      }
    
      render() {
        return (
          <div>
            <h3>TODO</h3>
            <form onSubmit={this.handleSubmit}>
              <input id="new-todo" onChange={this.handleChange}  value={this.state.text} />
              <button>Add</button>
            </form>
            <Todo items={this.state.items} />
          </div>
        );
      }
}