import React from 'react'
import { Card, CardBody, Heading, Skeleton, Text, dark } from 'toastswapuikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { useGetStats, useGetPriceData } from 'hooks/api'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0
  const data = useGetStats()
  const priceData = useGetPriceData()
  const toastPriceUsd = priceData ? Number(priceData.prices.TOAST) : undefined

  const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="lg" mb="24px" theme={dark}>
          {TranslateString(534, 'Toast Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px" theme={dark}>
            {TranslateString(536, 'Total TOAST Supply')}
          </Text>
          {cakeSupply && <CardValue color="#fff" fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px" theme={dark}>
            {TranslateString(538, 'Total TOAST Burned')}
          </Text>
          <CardValue fontSize="14px" color="#fff" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px" theme={dark}>
            {TranslateString(540, 'New TOAST/block')}
          </Text>
          <CardValue fontSize="14px" color="#fff" decimals={0} value={1} />
        </Row>

       
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
