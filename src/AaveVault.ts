import { ponder } from "ponder:registry";
import { aaveVaultEvent } from "ponder:schema";

ponder.on("AaveVault:Deposited", async ({ event, context }) => {
  await context.db
    .insert(aaveVaultEvent)
    .values({
      id: `${event.transaction.hash}-${event.log.logIndex}`,
      type: "deposit",
      amount: event.args.amount,
      blockNumber: event.block.number,
      txHash: event.transaction.hash,
    });
});

ponder.on("AaveVault:Withdrawn", async ({ event, context }) => {
  await context.db
    .insert(aaveVaultEvent)
    .values({
      id: `${event.transaction.hash}-${event.log.logIndex}`,
      type: "withdraw",
      amount: event.args.amount,
      blockNumber: event.block.number,
      txHash: event.transaction.hash,
    });
});
