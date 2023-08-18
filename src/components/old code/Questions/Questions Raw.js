import { Container } from 'react-bootstrap';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardLink,
    CardText,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
  } from 'reactstrap';

const Questions = (props) => {

    
     return (
    <Container>
         <Row md={6} sm={6} xs={12} >
            <Col md={12} sm={12} xs={12} className="mb-1">
            <Card  className="flex-row">
                <CardBody>
                <CardTitle>Question</CardTitle>
                <CardText>
                    Copy Paste Question Here
                </CardText>
                </CardBody>
            </Card>
            </Col>
        </Row>
        <Row md={6} sm={6} xs={12} >
            <Col md={4} sm={6} xs={12} className="mb-0">
            <Card className="flex-row">
                <CardBody>
                <CardTitle>Steps</CardTitle>
                <CardText>
                    Copy paste Steps Here
                </CardText>
                </CardBody>
            </Card>
            </Col>
            <Col md={4} sm={6} xs={12} >
                <Row className="mb-1">
                    <Card className="flex-row">
                        <CardBody>
                        <CardTitle>StepWise Question Here</CardTitle>
                        <CardText>
                        StepWise Question Here
                        </CardText>
                        </CardBody>
                    </Card>
                </Row>
                <Row>
                    <Card className="flex-row">
                        <CardBody>
                        <CardTitle>Video Here</CardTitle>
                        <CardText>
                        Video Here
                        </CardText>
                        </CardBody>
                    </Card>
                </Row>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
                        <CardBody>
                        <CardTitle>Animation Here</CardTitle>
                        <CardText>
                        Animation Here
                        </CardText>
                        </CardBody>
                    </Card>
            </Col>
        </Row>
    </Container> 
    )
}

export default Questions
