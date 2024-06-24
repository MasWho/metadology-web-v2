import dynamic from 'next/dynamic';

const DynamicReactPlayer = dynamic(() => import('./VideoPlayer'), {ssr: false});

export default DynamicReactPlayer;