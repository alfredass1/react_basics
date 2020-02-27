import React, {Component} from 'react';
import './article.scss';

class Article extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }


    render() {
        return (
            <article>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <p>Like:{this.state.counter}</p>
                <a onClick={this.handleClick}href="#">Like</a>
                <p>Email: mr.whiskaz@catnap.meow</p>
            </article>
        );

    }
}
export default Article;