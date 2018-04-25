import React from 'react';
import Edit from './Edit.js';

export default class Todo extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                <li><Edit items={item.text} /><br /></li>
                ))}
            </ul>
        );
    }
}