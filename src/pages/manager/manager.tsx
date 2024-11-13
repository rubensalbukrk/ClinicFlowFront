import React from 'react'
import Container from '../../components/Container/Container';

const Manager: React.FC = () => {
    document.title = "Gerênciamento da Clinica"
 return (
    <Container>
        <h1 className='text-6xl'>GERENCIAMENTO</h1>
    </Container>
 );
}
export default Manager;