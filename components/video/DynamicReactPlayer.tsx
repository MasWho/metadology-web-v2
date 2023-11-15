import dynamic from 'next/dynamic';

const DynamicReactPlayer = dynamic(() => import('react-player'), {ssr: false});

export default DynamicReactPlayer;