export enum ENVIRONMENT {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production'
}

export enum REQUEST_METHOD {
  GET = 'GET',
  POST = 'POST'
}

export enum HASURA_ROLE {
  USER = 'user',
  HASURA = 'hasura'
}

export enum ERROR {
  TRANSACTIONS_FETCH = 'TRANSACTIONS_FETCH'
}

/**
 * https://docs.helius.xyz/api-reference/transaction-types
 *
 * Helius values
 */
export enum TRANSACTION_TYPE {
  UNKNOWN = 'UNKNOWN',
  NFT_BID = 'NFT_BID',
  NFT_BID_CANCELLED = 'NFT_BID_CANCELLED',
  NFT_LISTING = 'NFT_LISTING',
  NFT_CANCEL_LISTING = 'NFT_CANCEL_LISTING',
  NFT_SALE = 'NFT_SALE',
  NFT_MINT = 'NFT_MINT',
  NFT_AUCTION_CREATED = 'NFT_AUCTION_CREATED',
  NFT_AUCTION_UPDATED = 'NFT_AUCTION_UPDATED',
  NFT_AUCTION_CANCELLED = 'NFT_AUCTION_CANCELLED',
  NFT_PARTICIPATION_REWARD = 'NFT_PARTICIPATION_REWARD',
  NFT_MINT_REJECTED = 'NFT_MINT_REJECTED',
  CREATE_STORE = 'CREATE_STORE',
  WHITELIST_CREATOR = 'WHITELIST_CREATOR',
  ADD_TO_WHITELIST = 'ADD_TO_WHITELIST',
  REMOVE_FROM_WHITELIST = 'REMOVE_FROM_WHITELIST',
  AUCTION_MANAGER_CLAIM_BID = 'AUCTION_MANAGER_CLAIM_BID',
  EMPTY_PAYMENT_ACCOUNT = 'EMPTY_PAYMENT_ACCOUNT',
  UPDATE_PRIMARY_SALE_METADATA = 'UPDATE_PRIMARY_SALE_METADATA',
  ADD_TOKEN_TO_VAULT = 'ADD_TOKEN_TO_VAULT',
  ACTIVATE_VAULT = 'ACTIVATE_VAULT',
  INIT_VAULT = 'INIT_VAULT',
  INIT_BANK = 'INIT_BANK',
  INIT_STAKE = 'INIT_STAKE',
  MERGE_STAKE = 'MERGE_STAKE',
  SPLIT_STAKE = 'SPLIT_STAKE',
  SET_BANK_FLAGS = 'SET_BANK_FLAGS',
  SET_VAULT_LOCK = 'SET_VAULT_LOCK',
  UPDATE_VAULT_OWNER = 'UPDATE_VAULT_OWNER',
  UPDATE_BANK_MANAGER = 'UPDATE_BANK_MANAGER',
  RECORD_RARITY_POINTS = 'RECORD_RARITY_POINTS',
  ADD_RARITIES_TO_BANK = 'ADD_RARITIES_TO_BANK',
  INIT_FARM = 'INIT_FARM',
  INIT_FARMER = 'INIT_FARMER',
  REFRESH_FARMER = 'REFRESH_FARMER',
  UPDATE_FARM = 'UPDATE_FARM',
  AUTHORIZE_FUNDER = 'AUTHORIZE_FUNDER',
  DEAUTHORIZE_FUNDER = 'DEAUTHORIZE_FUNDER',
  FUND_REWARD = 'FUND_REWARD',
  CANCEL_REWARD = 'CANCEL_REWARD',
  LOCK_REWARD = 'LOCK_REWARD',
  PAYOUT = 'PAYOUT',
  VALIDATE_SAFETY_DEPOSIT_BOX_V2 = 'VALIDATE_SAFETY_DEPOSIT_BOX_V2',
  SET_AUTHORITY = 'SET_AUTHORITY',
  INIT_AUCTION_MANAGER_V2 = 'INIT_AUCTION_MANAGER_V2',
  UPDATE_EXTERNAL_PRICE_ACCOUNT = 'UPDATE_EXTERNAL_PRICE_ACCOUNT',
  AUCTION_HOUSE_CREATE = 'AUCTION_HOUSE_CREATE',
  CLOSE_ESCROW_ACCOUNT = 'CLOSE_ESCROW_ACCOUNT',
  WITHDRAW = 'WITHDRAW',
  DEPOSIT = 'DEPOSIT ',
  TRANSFER = 'TRANSFER',
  BURN = 'BURN',
  BURN_NFT = 'BURN_NFT',
  PLATFORM_FEE = 'PLATFORM_FEE',
  LOAN = 'LOAN',
  REPAY_LOAN = 'REPAY_LOAN',
  ADD_TO_POOL = 'ADD_TO_POOL',
  REMOVE_FROM_POOL = 'REMOVE_FROM_POOL',
  CLOSE_POSITION = 'CLOSE_POSITION',
  UNLABELED = 'UNLABELED',
  CLOSE_ACCOUNT = 'CLOSE_ACCOUNT',
  WITHDRAW_GEM = 'WITHDRAW_GEM',
  DEPOSIT_GEM = 'DEPOSIT_GEM',
  STAKE_TOKEN = 'STAKE_TOKEN',
  UNSTAKE_TOKEN = 'UNSTAKE_TOKEN',
  STAKE_SOL = 'STAKE_SOL',
  UNSTAKE_SOL = 'UNSTAKE_SOL',
  CLAIM_REWARDS = 'CLAIM_REWARDS',
  BUY_SUBSCRIPTION = 'BUY_SUBSCRIPTION',
  SWAP = 'SWAP',
  INIT_SWAP = 'INIT_SWAP',
  CANCEL_SWAP = 'CANCEL_SWAP',
  REJECT_SWAP = 'REJECT_SWAP',
  INITIALIZE_ACCOUNT = 'INITIALIZE_ACCOUNT',
  TOKEN_MINT = 'TOKEN_MINT',
  CREATE_APPARAISAL = 'CREATE_APPARAISAL',
  FUSE = 'FUSE',
  DEPOSIT_FRACTIONAL_POOL = 'DEPOSIT_FRACTIONAL_POOL',
  FRACTIONALIZE = 'FRACTIONALIZE',
  CREATE_RAFFLE = 'CREATE_RAFFLE',
  BUY_TICKETS = 'BUY_TICKETS',
  UPDATE_ITEM = 'UPDATE_ITEM',
  LIST_ITEM = 'LIST_ITEM',
  DELIST_ITEM = 'DELIST_ITEM',
  ADD_ITEM = 'ADD_ITEM',
  CLOSE_ITEM = 'CLOSE_ITEM',
  BUY_ITEM = 'BUY_ITEM',
  FILL_ORDER = 'FILL_ORDER',
  UPDATE_ORDER = 'UPDATE_ORDER',
  CREATE_ORDER = 'CREATE_ORDER',
  CLOSE_ORDER = 'CLOSE_ORDER',
  CANCEL_ORDER = 'CANCEL_ORDER',
  KICK_ITEM = 'KICK_ITEM',
  UPGRADE_FOX = 'UPGRADE_FOX',
  UPGRADE_FOX_REQUEST = 'UPGRADE_FOX_REQUEST',
  LOAN_FOX = 'LOAN_FOX',
  BORROW_FOX = 'BORROW_FOX',
  SWITCH_FOX_REQUEST = 'SWITCH_FOX_REQUEST',
  SWITCH_FOX = 'SWITCH_FOX',
  CREATE_ESCROW = 'CREATE_ESCROW',
  ACCEPT_REQUEST_ARTIST = 'ACCEPT_REQUEST_ARTIST',
  CANCEL_ESCROW = 'CANCEL_ESCROW',
  ACCEPT_ESCROW_ARTIST = 'ACCEPT_ESCROW_ARTIST',
  ACCEPT_ESCROW_USER = 'ACCEPT_ESCROW_USER',
  PLACE_BET = 'PLACE_BET',
  PLACE_SOL_BET = 'PLACE_SOL_BET',
  CREATE_BET = 'CREATE_BET',
  NFT_RENT_UPDATE_LISTING = 'NFT_RENT_UPDATE_LISTING',
  NFT_RENT_ACTIVATE = 'NFT_RENT_ACTIVATE',
  NFT_RENT_CANCEL_LISTING = 'NFT_RENT_CANCEL_LISTING',
  NFT_RENT_LISTING = 'NFT_RENT_LISTING',
  FINALIZE_PROGRAM_INSTRUCTION = 'FINALIZE_PROGRAM_INSTRUCTION',
  UPGRADE_PROGRAM_INSTRUCTION = 'UPGRADE_PROGRAM_INSTRUCTION',
  NFT_GLOBAL_BID = 'NFT_GLOBAL_BID',
  NFT_GLOBAL_BID_CANCELLED = 'NFT_GLOBAL_BID_CANCELLED',
  EXECUTE_TRANSACTION = 'EXECUTE_TRANSACTION',
  APPROVE_TRANSACTION = 'APPROVE_TRANSACTION',
  ACTIVATE_TRANSACTION = 'ACTIVATE_TRANSACTION',
  CREATE_TRANSACTION = 'CREATE_TRANSACTION',
  REJECT_TRANSACTION = 'REJECT_TRANSACTION',
  CANCEL_TRANSACTION = 'CANCEL_TRANSACTION',
  ADD_INSTRUCTION = 'ADD_INSTRUCTION'
}

// Helius values
export enum TRANSACTION_SOURCE {
  CANDY_MACHINE_V2 = 'CANDY_MACHINE_V2',
  CANDY_MACHINE_V1 = 'CANDY_MACHINE_V1',
  CANDY_MACHINE_V3 = 'CANDY_MACHINE_V3',
  FORM_FUNCTION = 'FORM_FUNCTION',
  EXCHANGE_ART = 'EXCHANGE_ART',
  SOLANART = 'SOLANART',
  MAGIC_EDEN = 'MAGIC_EDEN',
  ENGLISH_AUCTION = 'ENGLISH_AUCTION',
  PHANTOM = 'PHANTOM',
  SOLSEA = 'SOLSEA',
  LAUNCH_MY_NFT = 'LAUNCH_MY_NFT',
  GEM_BANK = 'GEM_BANK',
  GEM_FARM = 'GEM_FARM',
  DEGODS = 'DEGODS',
  BLOCKSMITH_LABS = 'BLOCKSMITH_LABS',
  YAWWW = 'YAWWW',
  DIGITAL_EYES = 'DIGITAL_EYES',
  HYPERSPACE = 'HYPERSPACE',
  TENSOR = 'TENSOR',
  ELIXIR = 'ELIXIR',
  BIFROST = 'BIFROST',
  HEDGE = 'HEDGE',
  ATADIA = 'ATADIA',
  JUPITER = 'JUPITER',
  METAPLEX = 'METAPLEX',
  FOXY = 'FOXY',
  FOXY_STAKING = 'FOXY_STAKING',
  FOXY_RAFFLE = 'FOXY_RAFFLE',
  FOXY_TOKEN_MARKET = 'FOXY_TOKEN_MARKET',
  FOXY_MISSIONS = 'FOXY_MISSIONS',
  FOXY_MARMALADE = 'FOXY_MARMALADE',
  FOXY_COINFLIP = 'FOXY_COINFLIP',
  FOXY_AUCTION = 'FOXY_AUCTION',
  ALDRIN = 'ALDRIN',
  HADESWAP = 'HADESWAP',
  CARDINAL_RENT = 'CARDINAL_RENT',
  CARDINAL_STAKING = 'CARDINAL_STAKING',
  SQUADS = 'SQUADS',
  ELIXIR_LAUNCHPAD = 'ELIXIR_LAUNCHPAD',
  SOLANA_PROGRAM_LIBRARY = 'SOLANA_PROGRAM_LIBRARY',
  SYSTEM_PROGRAM = 'SYSTEM_PROGRAM',
  STAKE_PROGRAM = 'STAKE_PROGRAM',
  BPF_UPGRADEABLE_LOADER = 'BPF_UPGRADEABLE_LOADER',
  BPF_LOADER = 'BPF_LOADER'
}

export enum TRANSACTION_TAG {
  NFT_PURCHASE = 'NFT_PURCHASE',
  NFT_SALE = 'NFT_SALE',
  UNKNOWN = 'UNKNOWN'
}

/**
 * UserProfile IS user... nhost auth.user overcomplicated for this kind of auth.
 */
export type UserProfile = {
  // "wallet" used to distinguish address similar to "user" account.
  walletAddress: string;
  credits: number;
  creditsUsed: number;
  createdAt: string;
  updatedAt: string;
};

export type UserSettings = {
  walletAddress: string;
};

// https://docs.helius.xyz/api-reference/enhanced-transactions-api/parsed-transaction-history
export type Transaction = {
  walletAddress: string;
  signature: string;
  description: string;
  type: TRANSACTION_TYPE;
  source: TRANSACTION_SOURCE;
  fee: number;
  feePayer: string;
  slot: number;
  // unix timestamp
  timestamp: number;
  nativeTransfers: any[];
  tokenTransfers: any[];
  accountData: any[];
  transactionError: any;
  instructions: any[];
  events: any;
};
