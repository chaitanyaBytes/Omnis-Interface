import Image from "next/image";

export const logos = {
    omnis: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/logos/omnis-logo.svg" alt="OMNIS" width={width} height={height} className={className} />
    ),
    omnisBlack: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/logos/omnis-logo-black.svg" alt="OMNIS" width={width} height={height} className={className} />
    ),
    omnisFull: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/logos/omnis-logo-full-white.svg" alt="OMNIS" width={width} height={height} className={className} />
    ),
    omnisFullBlack: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/logos/omnis-logo-full.svg" alt="OMNIS" width={width} height={height} className={className} />
    )
}

export const WalletIcons = {
    phantom: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/wallets/Phantom_SVG_Icon.svg" alt="Phantom" width={width} height={height} className={className} />
    ),
    metamask: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/wallets/MetaMask.svg" alt="metamask" width={width} height={height} className={className} />
    ),
}

export const Icons = {
    bitcoin: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/bitcoin-btc-logo.svg" alt="Bitcoin" width={width} height={height} className={className} />
    ),

    binance: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/bnb-logo.svg" alt="Binance" width={width} height={height} className={className} />
    ),

    ethereum: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/ethereum-eth-logo.svg" alt="Ethereum" width={width} height={height} className={className} />
    ),

    solana: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/solana-sol-logo.svg" alt="Solana" width={width} height={height} className={className} />
    ),

    bnb: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/bnb-bnb-logo.svg" alt="BNB" width={width} height={height} className={className} />
    ),

    polygon: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/polygon-matic-logo.svg" alt="Polygon" width={width} height={height} className={className} />
    ),

    uniswap: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/uniswap-uni-logo.svg" alt="Uniswap" width={width} height={height} className={className} />
    ),

    usdc: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/usd-coin-usdc-logo.svg" alt="USDC" width={width} height={height} className={className} />
    ),

    usdt: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/tether-usdt-logo.svg" alt="USDT" width={width} height={height} className={className} />
    ),

    near: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/near-protocol-near-logo.svg" alt="NEAR" width={width} height={height} className={className} />
    ),

    jupiter: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/jupiter-ag-jup-logo.svg" alt="Jupiter" width={width} height={height} className={className} />
    ),

    google: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/supporters/Google_logo.svg" alt="Google" width={width} height={height} className={className} />
    ),

    microsoft: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/supporters/Microsoft_logo.svg" alt="Microsoft" width={width} height={height} className={className} />
    ),

    creditSuisse: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/supporters/CreditSuisse_logo.svg" alt="Credit Suisse" width={width} height={height} className={className} />
    ),

    sudoResearch: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/supporters/SudoResearch_logo.png" alt="Sudo Research" width={width} height={height} className={className} />
    ),

    numerai: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/supporters/Numerai_logo.png" alt="Numerai" width={width} height={height} className={`bg-white rounded-3xl p-1 ${className}`} />
    ),

    mediatek: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/supporters/MediaTek_logo.svg" alt="Mediatek" width={width} height={height} className={className} />
    ),

    RadianceVentures: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/supporters/RadianceVentures_logo.svg" alt="Radiance Ventures" width={width} height={height} className={className} />
    ),
    drift: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/crypto-logos/drift.png" alt="Drift" width={width} height={height} className={className} />
    ),
}


export const FeaturesIcons = {
    earn: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/features/earn.svg" alt="Earn" width={width} height={height} className={`rounded-full ${className}`} />
    ),

    risk: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/features/risk-management.svg" alt="Risk" width={width} height={height} className={`rounded-full ${className}`} />
    ),

    strategy: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/features/strategy.svg" alt="Strategy" width={width} height={height} className={`rounded-full ${className}`} />
    ),

    yield: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/features/yield.svg" alt="Yield" width={width} height={height} className={`rounded-full ${className}`} />
    ),

    onchain: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/features/onchain.svg" alt="Onchain" width={width} height={height} className={`rounded-full ${className}`} />
    ),

    security: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/features/security.svg" alt="Security" width={width} height={height} className={`rounded-full ${className}`} />
    ),
}

export const UiIcons = {
    sliders: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/icons/sliders.svg" alt="slider" width={width} height={height} className={`rounded-full ${className}`} />
    ),

    percent: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/icons/percent.svg" alt="percent" width={width} height={height} className={`rounded-full ${className}`} />
    ),

    coinPile: ({ width = 100, height = 100, className = "" }) => (
        <Image src="/icons/coin-pile.png" alt="tokens" width={width} height={height} className={`rounded-full ${className}`} />
    ),
}
