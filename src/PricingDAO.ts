import { ponder } from "ponder:registry";
import { member, proposal, vote } from "ponder:schema";

ponder.on("PricingDAO:MemberAdded", async ({ event, context }) => {
  await context.db
    .insert(member)
    .values({
      address: event.args.member,
      isProducer: event.args.isProducer,
      addedAt: event.block.number,
      addedTxHash: event.transaction.hash,
    });
});

ponder.on("PricingDAO:MemberRemoved", async ({ event, context }) => {
  await context.db.delete(member, { address: event.args.member });
});

ponder.on("PricingDAO:ProposalCreated", async ({ event, context }) => {
  await context.db
    .insert(proposal)
    .values({
      id: event.args.proposalId,
      pricePerKWh: event.args.pricePerKWh,
      createdAt: event.block.number,
      applied: false,
    });
});

ponder.on("PricingDAO:VoteCast", async ({ event, context }) => {
  await context.db
    .insert(vote)
    .values({
      id: `${event.args.proposalId}-${event.args.voter}`,
      proposalId: event.args.proposalId,
      voter: event.args.voter,
      isProducer: event.args.isProducer,
      choice: event.args.choice,
    });
});
