import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '/styles/card.module.css'
import Link from 'next/link';
import React from 'react'
const card = (props) => {
    
    let title = props.title;
    let tag = props.tag;
    let information = props.information;
    let image = props.image;

    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title><h2 className={styles.tittle}>{title}</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{tag}</Card.Subtitle>
                <Card.Text className={styles.text}>{information}</Card.Text>
                <Link as={`/products/${title}`} href={{ pathname: `/products/${title}`,query: props.pagedata[0]}} >
                    <Button className={styles.button} variant="primary">CHACK！</Button>
                </Link>
                
            </Card.Body>
        </Card>
    );
  }
  
export default card;