export type FoxyRaffleProgram = {
  "version": "0.1.0",
  "name": "rafffle",
  "instructions": [
    {
      "name": "createRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proceedsMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "endTimestamp",
          "type": "i64"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "maxEntrants",
          "type": "u32"
        },
        {
          "name": "creator1",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "creator2",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "creator3",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "limit",
          "type": "u32"
        },
        {
          "name": "count",
          "type": "u8"
        }
      ]
    },
    {
      "name": "extendRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "timestamp",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u32"
        }
      ]
    },
    {
      "name": "buyTickets",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTransferAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "revealWinners",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeEntrants",
      "accounts": [
        {
          "name": "raffle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addPrizeV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prize",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftCtx",
          "accounts": [
            {
              "name": "tokenMetadataProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructions",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "authorizationRulesProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prizeIndex",
          "type": "u32"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelRaffleV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prize",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftCtx",
          "accounts": [
            {
              "name": "tokenMetadataProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructions",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "authorizationRulesProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "priceIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "claimPrizeV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "prize",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "winner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "winnerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftCtx",
          "accounts": [
            {
              "name": "tokenMetadataProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructions",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "authorizationRulesProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prizeIndex",
          "type": "u32"
        },
        {
          "name": "ticketIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "collectProceedsV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorProceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "Raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "prize",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "totalPrizes",
            "type": "u32"
          },
          {
            "name": "claimedPrizes",
            "type": "u32"
          },
          {
            "name": "randomness",
            "type": {
              "option": {
                "array": [
                  "u8",
                  32
                ]
              }
            }
          },
          {
            "name": "endTimestamp",
            "type": "i64"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "entrants",
            "type": "publicKey"
          },
          {
            "name": "numberSold",
            "type": "u32"
          },
          {
            "name": "totalTickets",
            "type": "u32"
          },
          {
            "name": "startTimestamp",
            "type": "i64"
          },
          {
            "name": "fox",
            "type": "bool"
          },
          {
            "name": "holderOnly",
            "type": "bool"
          },
          {
            "name": "cm",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "limit",
            "type": "u32"
          },
          {
            "name": "winnerCount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Entrants",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Entry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Raffler",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "created",
            "type": "u32"
          },
          {
            "name": "volume",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "prize",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "end",
          "type": "i64",
          "index": false
        },
        {
          "name": "start",
          "type": "i64",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "entrants",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "total",
          "type": "u32",
          "index": false
        },
        {
          "name": "fox",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "CancelledRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DrawRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "winner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "UpdatedRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u32",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EntrantsAccountTooSmallForMaxEntrants",
      "msg": "Entrants account too small for max entrants"
    },
    {
      "code": 6001,
      "name": "RaffleEnded",
      "msg": "Raffle has ended"
    },
    {
      "code": 6002,
      "name": "InvalidPrizeIndex",
      "msg": "Invalid prize index"
    },
    {
      "code": 6003,
      "name": "NoPrize",
      "msg": "No prize"
    },
    {
      "code": 6004,
      "name": "InvalidCalculation",
      "msg": "Invalid calculation"
    },
    {
      "code": 6005,
      "name": "NotEnoughTicketsLeft",
      "msg": "Not enough tickets left"
    },
    {
      "code": 6006,
      "name": "RaffleStillRunning",
      "msg": "Raffle is still running"
    },
    {
      "code": 6007,
      "name": "WinnersAlreadyDrawn",
      "msg": "Winner already drawn"
    },
    {
      "code": 6008,
      "name": "WinnerNotDrawn",
      "msg": "Winner not drawn"
    },
    {
      "code": 6009,
      "name": "InvalidRevealedData",
      "msg": "Invalid revealed data"
    },
    {
      "code": 6010,
      "name": "TokenAccountNotOwnedByWinner",
      "msg": "Ticket account not owned by winner"
    },
    {
      "code": 6011,
      "name": "TicketHasNotWon",
      "msg": "Ticket has not won"
    },
    {
      "code": 6012,
      "name": "UnclaimedPrizes",
      "msg": "Unclaimed prizes"
    },
    {
      "code": 6013,
      "name": "InvalidRecentBlockhashes",
      "msg": "Invalid recent blockhashes"
    },
    {
      "code": 6014,
      "name": "OnlyCreatorCanClaimNoEntrantRafflePrizes",
      "msg": "Only the creator can claim no entrant raffle prizes"
    },
    {
      "code": 6015,
      "name": "InvalidTreasuryTokenAccountOwner",
      "msg": "Invalid treasury token account owner"
    },
    {
      "code": 6016,
      "name": "InvalidStake",
      "msg": "Invalid Stake"
    },
    {
      "code": 6017,
      "name": "RaffleActive",
      "msg": "Raffle active"
    },
    {
      "code": 6018,
      "name": "InvalidTime",
      "msg": "Invalid time"
    },
    {
      "code": 6019,
      "name": "InvalidTxn",
      "msg": "Invalid txn"
    },
    {
      "code": 6020,
      "name": "InvalidHolder",
      "msg": "Invalid holder info"
    },
    {
      "code": 6021,
      "name": "InvalidCreator",
      "msg": "Invalid creator"
    }
  ]
};

export const FOXY_RAFFLE_IDL: FoxyRaffleProgram = {
  "version": "0.1.0",
  "name": "rafffle",
  "instructions": [
    {
      "name": "createRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proceedsMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "endTimestamp",
          "type": "i64"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "maxEntrants",
          "type": "u32"
        },
        {
          "name": "creator1",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "creator2",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "creator3",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "limit",
          "type": "u32"
        },
        {
          "name": "count",
          "type": "u8"
        }
      ]
    },
    {
      "name": "extendRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "timestamp",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u32"
        }
      ]
    },
    {
      "name": "buyTickets",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "proceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTransferAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "revealWinners",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeEntrants",
      "accounts": [
        {
          "name": "raffle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addPrizeV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prize",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftCtx",
          "accounts": [
            {
              "name": "tokenMetadataProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructions",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "authorizationRulesProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prizeIndex",
          "type": "u32"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelRaffleV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prize",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftCtx",
          "accounts": [
            {
              "name": "tokenMetadataProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructions",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "authorizationRulesProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "priceIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "claimPrizeV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "prize",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "winner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "winnerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnftCtx",
          "accounts": [
            {
              "name": "tokenMetadataProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructions",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "authorizationRulesProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prizeIndex",
          "type": "u32"
        },
        {
          "name": "ticketIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "collectProceedsV2",
      "accounts": [
        {
          "name": "raffle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorProceeds",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "Raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "prize",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "totalPrizes",
            "type": "u32"
          },
          {
            "name": "claimedPrizes",
            "type": "u32"
          },
          {
            "name": "randomness",
            "type": {
              "option": {
                "array": [
                  "u8",
                  32
                ]
              }
            }
          },
          {
            "name": "endTimestamp",
            "type": "i64"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "entrants",
            "type": "publicKey"
          },
          {
            "name": "numberSold",
            "type": "u32"
          },
          {
            "name": "totalTickets",
            "type": "u32"
          },
          {
            "name": "startTimestamp",
            "type": "i64"
          },
          {
            "name": "fox",
            "type": "bool"
          },
          {
            "name": "holderOnly",
            "type": "bool"
          },
          {
            "name": "cm",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "limit",
            "type": "u32"
          },
          {
            "name": "winnerCount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Entrants",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Entry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Raffler",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "created",
            "type": "u32"
          },
          {
            "name": "volume",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "prize",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "end",
          "type": "i64",
          "index": false
        },
        {
          "name": "start",
          "type": "i64",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "entrants",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "total",
          "type": "u32",
          "index": false
        },
        {
          "name": "fox",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "CancelledRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DrawRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "winner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "UpdatedRaffle",
      "fields": [
        {
          "name": "raffle",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u32",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EntrantsAccountTooSmallForMaxEntrants",
      "msg": "Entrants account too small for max entrants"
    },
    {
      "code": 6001,
      "name": "RaffleEnded",
      "msg": "Raffle has ended"
    },
    {
      "code": 6002,
      "name": "InvalidPrizeIndex",
      "msg": "Invalid prize index"
    },
    {
      "code": 6003,
      "name": "NoPrize",
      "msg": "No prize"
    },
    {
      "code": 6004,
      "name": "InvalidCalculation",
      "msg": "Invalid calculation"
    },
    {
      "code": 6005,
      "name": "NotEnoughTicketsLeft",
      "msg": "Not enough tickets left"
    },
    {
      "code": 6006,
      "name": "RaffleStillRunning",
      "msg": "Raffle is still running"
    },
    {
      "code": 6007,
      "name": "WinnersAlreadyDrawn",
      "msg": "Winner already drawn"
    },
    {
      "code": 6008,
      "name": "WinnerNotDrawn",
      "msg": "Winner not drawn"
    },
    {
      "code": 6009,
      "name": "InvalidRevealedData",
      "msg": "Invalid revealed data"
    },
    {
      "code": 6010,
      "name": "TokenAccountNotOwnedByWinner",
      "msg": "Ticket account not owned by winner"
    },
    {
      "code": 6011,
      "name": "TicketHasNotWon",
      "msg": "Ticket has not won"
    },
    {
      "code": 6012,
      "name": "UnclaimedPrizes",
      "msg": "Unclaimed prizes"
    },
    {
      "code": 6013,
      "name": "InvalidRecentBlockhashes",
      "msg": "Invalid recent blockhashes"
    },
    {
      "code": 6014,
      "name": "OnlyCreatorCanClaimNoEntrantRafflePrizes",
      "msg": "Only the creator can claim no entrant raffle prizes"
    },
    {
      "code": 6015,
      "name": "InvalidTreasuryTokenAccountOwner",
      "msg": "Invalid treasury token account owner"
    },
    {
      "code": 6016,
      "name": "InvalidStake",
      "msg": "Invalid Stake"
    },
    {
      "code": 6017,
      "name": "RaffleActive",
      "msg": "Raffle active"
    },
    {
      "code": 6018,
      "name": "InvalidTime",
      "msg": "Invalid time"
    },
    {
      "code": 6019,
      "name": "InvalidTxn",
      "msg": "Invalid txn"
    },
    {
      "code": 6020,
      "name": "InvalidHolder",
      "msg": "Invalid holder info"
    },
    {
      "code": 6021,
      "name": "InvalidCreator",
      "msg": "Invalid creator"
    }
  ]
};
