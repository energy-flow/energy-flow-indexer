export const PricingDAOAbi = [
  {
    inputs: [
      { internalType: "address", name: "_pmo", type: "address" },
      { internalType: "uint256", name: "_initialPrice", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "member", type: "address" },
      { indexed: false, internalType: "bool", name: "isProducer", type: "bool" },
    ],
    name: "MemberAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "member", type: "address" },
      { indexed: false, internalType: "bool", name: "wasProducer", type: "bool" },
    ],
    name: "MemberRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "proposalId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "oldPrice", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "newPrice", type: "uint256" },
    ],
    name: "PriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "proposalId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "pricePerKWh", type: "uint256" },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "proposalId", type: "uint256" },
      { indexed: true, internalType: "address", name: "voter", type: "address" },
      { indexed: false, internalType: "bool", name: "isProducer", type: "bool" },
      { indexed: false, internalType: "uint8", name: "choice", type: "uint8" },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "previousStatus", type: "uint8" },
      { indexed: false, internalType: "uint8", name: "newStatus", type: "uint8" },
    ],
    name: "WorkflowStatusChange",
    type: "event",
  },
] as const;
