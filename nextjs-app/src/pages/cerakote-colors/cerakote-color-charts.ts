// pages/cerakote-color-charts.ts

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/services/cerakote-coating/color-codes',
      permanent: true, // This sets the status code to 301
    },
  };
};

const CerakoteColorCharts = () => {
  return null; // This component won't be rendered because of the redirect
};

export default CerakoteColorCharts;
