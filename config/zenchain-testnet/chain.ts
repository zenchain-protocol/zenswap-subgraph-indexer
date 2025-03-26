import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x6316f1f695aAb22e386dDd7E7C0C3415011Cc6f8'

export const REFERENCE_TOKEN = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
export const STABLE_TOKEN_PAIRS = ['0x57CA670Fd913536DEC0524978059E6663796bce3']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x70e22f8ccfd7ecbcc36c072f39dd61e2cd8296bf', // WETH
  '0x72545c4c05161f0e11447144abdeb01d66490bb1', // USDC
]

export const STABLECOINS = [
  '0x72545c4c05161f0e11447144abdeb01d66490bb1', // USDC
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
