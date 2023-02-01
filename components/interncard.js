import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/InternCard.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function InternCard({ user }) {
  return (
    <Card className={styles.card__container}>
      <Card.Img className={styles.card__image} variant='top' src={user.pp} />
      <Card.Body className={`${inter.className} mx-auto text-center`}>
        <Card.Title className={styles.card__title}>{user.name}</Card.Title>
        <Card.Text>{user.job}</Card.Text>
        <Card.Link href='#'>
          <Image src={user.logo1} alt='BI Logo' width={118} height={50} />
        </Card.Link>
        <Card.Link href='#'>
          <Image src={user.logo2} alt='BI Logo' width={118} height={50} />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
