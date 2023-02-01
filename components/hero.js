import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Hero() {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center'>
      <Container className='p-5'>
        <Row>
          <Col
            xs={{ span: 12, order: 'last' }}
            md={{ span: 6, order: 'first' }}
            lg={{ span: 8, order: 'first' }}
          >
            <div className={`${inter.className} ${styles.hero__text}`}>
              <h1 className={`${styles.h1} mb-4`}>
                Together, Build The Future with <span className={styles.hero__sic}>SIC</span>
              </h1>
              <p className='mb-4'>
                We're at an exciting point in computing history, where we're committed to finding
                the best way to share knowledge about technology. We'll do our best to guide our
                members for a brighter future through projects, sharing sessions, studying, and
                discussing computer-science-relevant topics together.
              </p>
              <a href='/'>
                <Button className={styles.hero__button}>Explore</Button>
              </a>
            </div>
          </Col>
          <Col
            className={styles.logo__container}
            xs={{ span: 12, order: 'first' }}
            md={{ span: 6, order: 'last' }}
            lg={{ span: 4, order: 'last' }}
          >
            <Image
              className={styles.logo}
              src='/image/sic-logo-final.png'
              alt='SIC Logo'
              width={296}
              height={296}
            />
            <Image
              className={styles.logo__bg}
              src='/image/sic-logo-bg.png'
              alt='SIC Logo'
              width={344}
              height={344}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
