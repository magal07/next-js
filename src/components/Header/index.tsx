import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '../../config/app-config';

// legacyBehavior = adjusting version next
export const Header = () => {
  return (
    <Container>
      <Link href="/" legacyBehavior>
        <a>{SITE_NAME}</a>
      </Link>
    </Container>
  );
};
