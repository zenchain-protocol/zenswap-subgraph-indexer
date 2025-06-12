import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x77d7fa7cb837e7a1cd48918eaec6afa996586799'

export const REFERENCE_TOKEN = '0x0000000000000000000000000000000000000804'
export const STABLE_TOKEN_PAIRS = [
  '0xb38D321c4dB0Bbe09E02c99b39146aEae250FC35', // ZTC-USDC
  '0xAb935A3d43c24F4e8a9Be06e538D4335E2a0AEEc', // ZTC-USDT
]

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x0000000000000000000000000000000000000804', // ZTC
  '0x95b1a313e08c577c678d6abfc229a6fa035e95db', // ETH
  '0xdc2b839dc176f152bc74c008de8dd6475bb0d25c', // USDC
  '0x289128c4bd8d72cad19338453cb87fae900e759d', // USDT
]

export const STABLECOINS = [
  "0xdc2b839dc176f152bc74c008de8dd6475bb0d25c", // USDC
  "0x289128c4bd8d72cad19338453cb87fae900e759d", // USDT
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
