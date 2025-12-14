export const AaveVaultAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "depositor", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "depositor", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "depositor", type: "address" },
    ],
    name: "DepositorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "depositor", type: "address" },
    ],
    name: "DepositorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: true, internalType: "address", name: "safetyBuffer", type: "address" },
    ],
    name: "InterestsHarvested",
    type: "event",
  },
] as const;
