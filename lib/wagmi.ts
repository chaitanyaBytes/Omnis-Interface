import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
    bsc,
    mainnet,
} from 'wagmi/chains';


export const config = getDefaultConfig({
    appName: 'Omnis',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, bsc,],
    ssr: true, // If your dApp uses server side rendering (SSR)
});