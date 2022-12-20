import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";


export const Post = () => {
    const params = useParams()

    const postId = parseInt(params.postId)
    const post = useSelector(state => state.posts.posts.find(post => post.id === postId))

    const replies = post.replies
    const repliesList = replies.map(reply => (
        <Container className="box" key={reply.id}>
            <Card.Text className="d-flex justify-content-start">{reply.body}</Card.Text>
            <Card.Text className="d-flex justify-content-end">@{reply.user.username}, {reply.created_at}</Card.Text>
        </Container>
    ))

    return (
        <Col lg={8} className='d-inline-flex justify-content-center'>
            <Row lg={1} className='d-inline-flex justify-content-center align-items-center'>
                <Card className="mt-3">
                    <Card.Header>
                        <Card.Title className="d-flex justify-content-start">{post.title}</Card.Title>
                        <Row>
                            <Col className="d-flex justify-content-start">
                                <Card.Subtitle>@{post.user.username}, {post.created_at}</Card.Subtitle>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Card.Subtitle>Likes: 5, Dislikes: 10</Card.Subtitle>
                            </Col>
                        </Row>
                        <Card.Subtitle className="d-flex justify-content-start mt-1">Tags: Fun, Games</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {repliesList}
                        {/* <Container className="box">
                            <Card.Text className="d-flex justify-content-start">Reply 1</Card.Text>
                            <Card.Text className="d-flex justify-content-end">@user 2, 13 Dec 21 9.02pm</Card.Text>
                        </Container>
                        <Container className="box">
                            <Card.Text className="d-flex justify-content-start">Reply 2</Card.Text>
                            <Card.Text className="d-flex justify-content-end">@user 3, 13 Dec 21 9.05pm</Card.Text>
                        </Container> */}
                        <Container className="box">
                            <Form>
                                <Form.Group className="mb-3" controlId="formReply">
                                    <Row>
                                        <Form.Control type="text" placeholder="Reply to the post" required/>
                                        <div className="d-flex justify-content-end">
                                            <Button type="submit" className="mt-2">Reply</Button>
                                        </div>
                                    </Row>
                                </Form.Group>
                            </Form>
                            
                        </Container>
                    </Card.Footer>
                </Card>
            </Row>
        </Col>
    )
};

// class Post extends React.Component {
//     render() {
//         return (
//             <Col lg={8} className='d-inline-flex justify-content-center'>
//                 <Row lg={1} className='d-inline-flex justify-content-center align-items-center'>
//                     <Card className="mt-3">
//                         <Card.Header>
//                             <Card.Title className="d-flex justify-content-start">Post 1 title</Card.Title>
//                             <Row>
//                                 <Col className="d-flex justify-content-start">
//                                     <Card.Subtitle>@user1, 13 Dec 21 7.36pm</Card.Subtitle>
//                                 </Col>
//                                 <Col className="d-flex justify-content-end">
//                                     <Card.Subtitle>Likes: 5, Dislikes: 10</Card.Subtitle>
//                                 </Col>
//                             </Row>
//                             <Card.Subtitle className="d-flex justify-content-start mt-1">Tags: Fun, Games</Card.Subtitle>
//                         </Card.Header>
//                         <Card.Body>
//                             <Card.Text>Post 1 body text is all here maybe it should be abit longer but idk what to put in for this so ill end it here</Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Container className="box">
//                                 <Card.Text className="d-flex justify-content-start">Reply 1</Card.Text>
//                                 <Card.Text className="d-flex justify-content-end">@user 2, 13 Dec 21 9.02pm</Card.Text>
//                             </Container>
//                             <Container className="box">
//                                 <Card.Text className="d-flex justify-content-start">Reply 2</Card.Text>
//                                 <Card.Text className="d-flex justify-content-end">@user 3, 13 Dec 21 9.05pm</Card.Text>
//                             </Container>
//                             <Container className="box">
//                                 <Form>
//                                     <Form.Group className="mb-3" controlId="formReply">
//                                         <Row>
//                                             <Form.Control type="text" placeholder="Reply to the post" required/>
//                                             <div className="d-flex justify-content-end">
//                                                 <Button type="submit" className="mt-2">Reply</Button>
//                                             </div>
//                                         </Row>
//                                     </Form.Group>
//                                 </Form>
                                
//                             </Container>
//                         </Card.Footer>
//                     </Card>
//                 </Row>
//             </Col>
//         );
//     }
// }

// export default Post;