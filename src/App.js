import React from 'react';
import faker from 'faker';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
        this.state = {
            comments: []
        }
    }

    addComment(e) {
        e.preventDefault();

        let comment = e.target.elements.comment.value;

        this.setState((prevState) => {
            return {
                comments: prevState.comments.concat(comment)
            }
        })

        e.target.elements.comment.value = '';
    }

    render(){
        return (
            <div className="title-container">
                <h2 className="title">Comment!</h2>
                {this.state.comments.length > 0 && <CommentCard comments={this.state.comments}/>}
                <AddComment addComment={this.addComment}/>
            </div>
        )
    }
}

const AddComment = (props) => {
    return (
        <div>
            <form onSubmit={props.addComment}>
                <input type="text" name="comment"></input>
                <button>POST</button>
            </form>
        </div>
    )
}


const CommentCard = (props) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    
    return (
        props.comments.map((comment, index) => {
            return (
                <div className="card-container" key={index}>
                    <div className="left-card">
                        <img src={faker.image.avatar()}></img>
                        <h3>{faker.name.firstName()}</h3>
                        <p>{dateTime}</p>
                    </div>
                    <div className="right-card">
                        <p>{comment}</p>
                    </div>
                </div>
            )
        })
    )
}

export default App;