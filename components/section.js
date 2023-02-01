import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Section.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Section() {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center'>
      <Container className={styles.container}>
        <div className={`${inter.className} ${styles.section__header} mx-auto`}>
          <h1 className={`${styles.h1} mb-4`}>
            Why You Should Join <span className={styles.section__sic}>SIC</span>
          </h1>
          <p className={styles.p}>
            SIC main goal is focused on enhancing <span className={styles.section__you}>YOU</span>.
            We'll focus on projects and activities that make you go beyond the next level.
          </p>
        </div>

        <Row className={styles.section__immerse}>
          <Col
            xs={{ span: 12, order: 'last' }}
            md={{ span: 5, order: 'first' }}
            lg={{ span: 6, order: 'first' }}
          >
            <div className={`${inter.className} ${styles.section__text}`}>
              <h2 className={styles.h2}>Immerse Projects</h2>
              <p className={styles.p}>
                Immerse Projects lets you experience the way a real project is made at big companies
                or startups. By doing projects together, you would have a "Project Experience" at
                which you can put on your CV. By having those in your CV, you could land a great
                internship, a job, or even a client.
              </p>
              <p className={styles.p}>
                Having "Work closely with ..." is very valuable in CV, and by joining SIC you could
                have that on your CV.
              </p>
            </div>
          </Col>
          <Col
            className={styles.logo__container}
            xs={{ span: 12, order: 'first' }}
            md={{ span: 7, order: 'last' }}
            lg={{ span: 6, order: 'last' }}
          >
            <Image
              className={styles.section__immerse__logo}
              src='/vektor/immerse-art.svg'
              alt='Immerse project'
              width={399}
              height={395}
            />
          </Col>
        </Row>

        <Row className={styles.section__discussion}>
          <Col
            className={styles.logo__container}
            xs={{ span: 12, order: 'first' }}
            md={{ span: 7, order: 'first' }}
            lg={{ span: 6, order: 'first' }}
          >
            <Image
              className={styles.section__immerse__logo}
              src='/vektor/groups-art.svg'
              alt='Group discussion'
              width={425}
              height={227}
            />
          </Col>
          <Col
            xs={{ span: 12, order: 'last' }}
            md={{ span: 5, order: 'last' }}
            lg={{ span: 6, order: 'last' }}
          >
            <div className={`${inter.className} ${styles.section__text__discussion}`}>
              <h2 className={styles.h2}>Career-Focused Group Discussion</h2>
              <p className={styles.p}>
                If you're an absolute beginner in technology, we will guide you from a beginner to
                an expert with passion. We would hold informal group discussions, discussing
                computer-science-related things such as solving a problem together or teaching
                programming or infrastructure from start.
              </p>
              <p className={styles.p}>
                Whether you're an absolute beginner or a multi-expert in technology, SIC is for you
                as long as you have a great interest in building a career in the tech industry.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
