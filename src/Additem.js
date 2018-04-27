import React from 'react';

export default class Additem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check = this.check.bind(this);
      }

      check(e) {
        e.target.checked="checked";
        var items = this.state.items;
        items[e.target.id].iscompleted = !items[e.target.id].iscompleted;
        this.setState({items});
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
          id: this.state.items.length,
          iscompleted: false
        };

        this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          text: ''
        }));

      }
    
      render() {
        var createuncompletedItem = function(item) {
          if(item.iscompleted === false) {
          return <li key={item.id}><input className="form-check-input" id={item.id} type="checkbox" onChange={this.check} />{item.text}</li>;
          }
        };

        var createcompletedItem = function(item) {
          if(item.iscompleted === true) {
          return <strike><li key={item.id}><input className="form-check-input" id={item.id} type="checkbox" checked />{item.text}</li></strike>;
          }
        };

        return (
          <div align="center" className="col-sm-3">
            <br />
            <div id="app">
              <h6>ADD ITEM</h6><hr />
              <form onSubmit={this.handleSubmit}>
                <div class="input-group">
                  <input className="form-control form-control-sm" id="new-todo" onChange={this.handleChange}  value={this.state.text} />
                  <span class="input-group-btn">
                    <button className="btn btn-link text-secondary btn-sm">Add</button>
                  </span>
                </div>
              </form>
            </div><br /><br />

            <div id="todo">
              <h6>TODO</h6><hr />
              <ul className="list-unstyled">
                {this.state.items.map(createuncompletedItem, this)}
              </ul>
            </div><br /><br />

            <div id="completed">
              <h6 >COMPLETED</h6><hr />
              <ul className="list-unstyled">
                {this.state.items.map(createcompletedItem, this)}
              </ul>
            </div>

          </div>
        );
      }
}
