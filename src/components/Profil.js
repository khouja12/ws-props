import React from 'react'
import { Button, Card } from 'react-bootstrap'
import PropTypes from "prop-types"

const Profil = (props) => {
    const HandleName = (name) => alert(`my name is ${props.name}`)
    return (    
        <div>
            <Card style={{ width: '20rem' }}>
                {props.children}
                <Card.Body>
                    <Card.Title > {props.name}</Card.Title>
                    <Card.Text>{props.profession}</Card.Text>
                    <Card.Text>{props.age}</Card.Text>
                    <Card.Text>{props.title}</Card.Text>

                    <Button variant="primary" onClick={HandleName}>Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}
Profil.propTypes = {
    age: PropTypes.number

}
Profil.defaultProps = {
    name: "khouja"
}
export default Profil