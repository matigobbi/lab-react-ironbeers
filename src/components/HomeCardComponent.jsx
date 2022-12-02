import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom/dist"


function HomeCardComponent({ title, whenClick }) {
    const navigate = useNavigate()


    return (
        <Card style={{ width: '18rem', cursor: 'pointer' }} className={'m-5'} onClick={() => navigate(whenClick)}>
            <Card.Img variant="top" className='p-3' src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default HomeCardComponent;