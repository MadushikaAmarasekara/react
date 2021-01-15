import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    renderComments(comments){
        if(comments!=null){
            let dt = { year: "numeric", month: "short", day: "numeric" };

            return comments.map((comment) => ( 
                <ul className="list-unstyled" key={comment.id}>
                    <li>{comment.comment}</li>
                    <li className="mt-2">-- {comment.author} , {new Date(comment.date).toLocaleDateString("en-US", dt)}</li>
                </ul>
            ));
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </div>
        ); 
    }
}

export default DishDetail;