// pages/old-page.js

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/pricing',
      permanent: true, // This sets the status code to 301
    },
  };
};

const OldPage = () => {
  return null; // This component won't be rendered because of the redirect
};

export default OldPage;
