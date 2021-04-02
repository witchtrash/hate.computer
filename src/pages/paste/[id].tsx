import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '~/components/Container';

const Paste = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container fullHeight padding="16px">
      paste: {id}
    </Container>
  );
};

export default Paste;