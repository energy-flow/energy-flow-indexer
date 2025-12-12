import { onchainTable } from "ponder";

export const member = onchainTable("member", (t) => ({
  address: t.hex().primaryKey(),
  isProducer: t.boolean().notNull(),
  addedAt: t.bigint().notNull(),
  addedTxHash: t.hex().notNull(),
}));

export const proposal = onchainTable("proposal", (t) => ({
  id: t.bigint().primaryKey(),
  pricePerKWh: t.bigint().notNull(),
  createdAt: t.bigint().notNull(),
  applied: t.boolean().notNull(),
}));

export const vote = onchainTable("vote", (t) => ({
  id: t.text().primaryKey(),
  proposalId: t.bigint().notNull(),
  voter: t.hex().notNull(),
  isProducer: t.boolean().notNull(),
  choice: t.integer().notNull(),
}));

// EFT Events (EnergyTokenized, EnergyBurned)
export const eftEvent = onchainTable("eft_event", (t) => ({
  id: t.text().primaryKey(),
  type: t.text().notNull(),
  address: t.hex().notNull(),
  amount: t.bigint().notNull(),
  meterId: t.text(),
  blockNumber: t.bigint().notNull(),
  txHash: t.hex().notNull(),
}));

// AaveVault Events (Deposited, Withdrawn)
export const aaveVaultEvent = onchainTable("aave_vault_event", (t) => ({
  id: t.text().primaryKey(),
  type: t.text().notNull(),
  amount: t.bigint().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.hex().notNull(),
}));
