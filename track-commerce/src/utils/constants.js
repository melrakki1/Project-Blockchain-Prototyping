export const address = '0xab98E15A2880f40B52bA922aa59Ef12Ca5e4C92E';
export const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "trackingNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "customer",
				"type": "address"
			}
		],
		"name": "DeliveryConfirmed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "trackingNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "shipper",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "customer",
				"type": "address"
			}
		],
		"name": "DeliveryCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "trackingNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "enum DeliveryTracking.DeliveryStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "StatusUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_trackingNumber",
				"type": "string"
			}
		],
		"name": "confirmDelivery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_trackingNumber",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_customer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_courier",
				"type": "address"
			}
		],
		"name": "createDelivery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "deliveries",
		"outputs": [
			{
				"internalType": "string",
				"name": "trackingNumber",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "shipper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "customer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "courier",
				"type": "address"
			},
			{
				"internalType": "enum DeliveryTracking.DeliveryStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_trackingNumber",
				"type": "string"
			}
		],
		"name": "getDelivery",
		"outputs": [
			{
				"internalType": "string",
				"name": "trackingNumber",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "shipper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "customer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "courier",
				"type": "address"
			},
			{
				"internalType": "enum DeliveryTracking.DeliveryStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_trackingNumber",
				"type": "string"
			},
			{
				"internalType": "enum DeliveryTracking.DeliveryStatus",
				"name": "_status",
				"type": "uint8"
			}
		],
		"name": "updateStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_trackingNumber",
				"type": "string"
			}
		],
		"name": "verifyData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]