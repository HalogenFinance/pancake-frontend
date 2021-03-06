import React, { useContext } from 'react'
import { Menu as UikitMenu } from 'toastswapuikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd, useProfile } from 'state/hooks'
import { useGetPriceData } from 'hooks/api'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  
  const priceData = useGetPriceData()
  const cakePriceUsd = priceData ? Number(priceData.prices.TOAST) : undefined
 

  const { profile } = useProfile()

  

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      links={config}
      {...props}
    />
  )
}

export default Menu
