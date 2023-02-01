import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Opportunity.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
import InternCard from './interncard';

export default function Opportunity() {
  const internees = [
    {
      pp: '/image/intern-tryana.png',
      name: 'I Komang Tryana Mertayasa',
      job: 'Data Scientist Intern',
      logo1: '/image/logo-bi.svg',
      logo2: '/image/logo-tiket.com.svg',
    },
    {
      pp: '/image/intern-krisna.png',
      name: 'I Kadek Krisna Dwi Payana',
      job: 'Software Quality Assurance Intern',
      logo1: '/image/logo-alterra.svg',
      logo2: '/image/logo-tiket.com.svg',
    },
    {
      pp: '/image/intern-odi.png',
      name: 'Putu Audi Pasuatmadi',
      job: 'Software Engineer Intern',
      logo1: '/image/logo-tiket.com.svg',
      logo2: '/image/logo-shopee.svg',
    },
  ];

  return (
    <Container className={`${styles.oppor__container} text-center`}>
      <div className={`${inter.className} ${styles.oppor__text} mx-auto`}>
        <h1 className={`${styles.h1} mb-4`}>
          Aim <span className={`${styles.span} ${styles.oppor}`}>Opportunity</span> With{' '}
          <span className={styles.span}>SIC</span>
        </h1>
        <p className={styles.p}>
          Several SIC members and alumni of SIC have had extraordinary opportunities this year. Some
          of them get an intern opportunity at a big tech company, setelah itu ada yang mendapatkan
          kesempatan di media company, then some get an opportunity at a National Government
          Instance, and some get the opportunity to become a student at one of the biggest tech
          companies in the world. <span className={styles.p__span}>Who is next? Is you.</span>
        </p>
      </div>
      <div
        className={`${styles.intern__container} d-flex position-relative justify-content-evenly start-50 translate-middle-x`}
      >
        {internees.map((int) => (
          <InternCard user={int} />
        ))}
      </div>
      <a href='/'>
        <Button className={`${styles.intern__button} ${inter.className}`}>See More</Button>
      </a>
    </Container>
  );
}
