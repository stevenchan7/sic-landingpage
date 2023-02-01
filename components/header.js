import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Header() {
  return (
    <Navbar expand='sm' sticky='top' className='bg-white'>
      <Container>
        <Navbar.Brand href='/'>
          <Image src='/image/sic-logo-nav.svg' alt='SIC Logo' width={76} height={23} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className={`${styles.header__links} ms-auto`}>
            <Nav.Link className={styles.header__link} href='/'>
              Home
            </Nav.Link>
            <Nav.Link className={styles.header__link} href=''>
              Divisions
            </Nav.Link>
            <Nav.Link className={styles.header__link} href=''>
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
