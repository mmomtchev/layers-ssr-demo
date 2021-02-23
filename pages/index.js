import Head from 'next/head';

import { fromLonLat } from 'ol/proj';

import { RMap, ROSM } from 'rlayers';
import RSSRender from 'rlayers/RSSR';

export async function getServerSideProps(context) {
  let ssr = '';
  console.log('SSR BEGIN');
  try {
    ssr = await RSSRender(Home());
  } catch (e) {
    console.error('RSSRender error', e);
  }

  console.log('SSR END', ssr.placeholderImage.length);

  return {
    props: { ssr }
  };
}

export default function Home(props) {
  console.log('HOME RENDER');
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <RMap ssr={props?.ssr} width={500} height={500} zoom={9} center={fromLonLat([2.364, 48.82])}>
        <ROSM />
      </RMap>
    </div>
  )
}
