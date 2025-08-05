import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0xe75096a9377d90d702c4c689cfc09df80ec61621'

export const REFERENCE_TOKEN = '0x0000000000000000000000000000000000000804'
export const STABLE_TOKEN_PAIRS = [
  '0x016A0f043d85B254203062169D6b333011261CbD', // ZTC-USDC
  '0x29681015CC215EA5Bf42185274218e5d2AeDb50d', // ZTC-USDT
]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x0000000000000000000000000000000000000804', // ZTC
  '0x89f8267e9480bbf7833d3a0cfe98bde70f96e1a0', // ETH
  '0x44d25859f79787ff937ec1305dbf0866d6064e21', // USDC
  '0x2a0b66deb779ef7df45b064ef5cee2b1bf6e5dd5', // USDT
  '0xe267b9cc76a614b8e178b4552e9983d1f19ceb05', // BTC
]

export const STABLECOINS = [
  "0x44d25859f79787ff937ec1305dbf0866d6064e21", // USDC
  "0x2a0b66deb779ef7df45b064ef5cee2b1bf6e5dd5", // USDT
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
// TODO: Just for testing for now, reconsider this for mainnet or long term
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('1')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
