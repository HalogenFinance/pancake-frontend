import { MenuEntry } from 'toastswapuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.toastfinance.com',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.toastfinance.com/#/pool',
      },
    ],
  }
]

export default config
