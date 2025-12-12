import { ponder } from "ponder:registry";
import { eftEvent } from "ponder:schema";

ponder.on("EFT:EnergyTokenized", async ({ event, context }) => {
  await context.db
    .insert(eftEvent)
    .values({
      id: `${event.transaction.hash}-${event.log.logIndex}`,
      type: "mint",
      address: event.args.recipient,
      amount: event.args.amount,
      meterId: event.args.meterId,
      blockNumber: event.block.number,
      txHash: event.transaction.hash,
    });
});

ponder.on("EFT:EnergyBurned", async ({ event, context }) => {
  await context.db
    .insert(eftEvent)
    .values({
      id: `${event.transaction.hash}-${event.log.logIndex}`,
      type: "burn",
      address: event.args.account,
      amount: event.args.amount,
      meterId: null,
      blockNumber: event.block.number,
      txHash: event.transaction.hash,
    });
});
