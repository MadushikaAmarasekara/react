import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );     
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish!=null){
            // let dt = { year: "numeric", month: "short", day: "numeric" };

            const coms = dish.comments.map((comment) => { 
                return(
                    <ul className="list-unstyled" key={comment.id}>
                        <li>{comment.comment}</li>
                        <li className="mt-2">-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: "numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(comment.date)))}</li> {/*{new Date(comment.date).toLocaleDateString("en-US", dt)} */}
                    </ul>
                );
            });

            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {coms}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    render(){
        return(
            <div class="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        ); 
    }
}

export default DishDetail;