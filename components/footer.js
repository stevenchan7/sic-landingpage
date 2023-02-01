import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  return (
    <Container fluid className={styles.footer__container}>
      <Row className={`${styles.row} ${inter.className}`}>
        <Col sm={8} className='p-0'>
          <Row className='align-items-center'>
            <Col sm={3}>
              <div>Follow Us</div>
            </Col>
            <Col sm={9}>
              <div>
                <Image src='/image/logo-ig.svg' alt='Instagram Logo' width={20} height={20} />
                <Image src='/image/logo-linkedin.svg' alt='Instagram Logo' width={20} height={20} />
              </div>
            </Col>
            <Col sm={3}>
              <div>Visit Us</div>
            </Col>
            <Col sm={9}>
              <div>Sekretariat SIC. Gedung BD Lt. 2, Informatika FMIPA Udayana</div>
            </Col>
            <Col sm={3}>
              <div>Contact Us</div>
            </Col>
            <Col sm={9}>
              <div>+62-8776-0462-483</div>
            </Col>
          </Row>
          <Row className={styles.row__credit}>
            <Col>
              © Student Innovation Centre All Rights Reserved. Website by SIC 2021/2022 (Generation
              2019).
            </Col>
          </Row>
        </Col>
        <Col sm={4} className={`${styles.footer__logo} p-0 mt-3 mb-3`}>
          <Image src='/assets/others/sic-logo-only.svg' alt='SIC Logo' width={120} height={36} />
        </Col>
      </Row>
    </Container>
  );
}
