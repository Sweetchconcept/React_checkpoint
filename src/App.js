import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Card } from 'react-bootstrap';
import Name from './Index'
import Price from './Price'
import Description from './Description'
import Image from './Image'

const firstName = "Benson";

function App() {
    return (
        <Container className='mt-5'>
            <Card style={{ width: '18rem' }}>
                <Image />
                <Card.Body>
                    <Card.Title><Name /></Card.Title>
                    <Card.Text>
                        <Price />
                    </Card.Text>
                    <Card.Text>
                        <Description />
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className = 'mt-5'>
                {firstName ? `Hello, ${firstName}!` : 'Hello, there'}
            </div>
            {firstName && <img src="" alt="" />}
        </Container>
    );
};

export default App;