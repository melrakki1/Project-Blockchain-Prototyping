const Web3 = require('web3');

// URL Infura Anda
const INFURA_URL = "https://sepolia.infura.io/v3/f36a73d59c0f4b7a9bd594584188715c";
const PROVIDER_URL = "http://127.0.0.1:7545"; 

// Inisialisasi Web3 dengan provider
const web3 = new Web3(PROVIDER_URL);

console.log("Web3 initialized successfully");
// ABI dan alamat kontrak
const CONTRACT_ABI = [
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

const CONTRACT_ADDRESS = "0xab98E15A2880f40B52bA922aa59Ef12Ca5e4C92E"; // Ganti dengan alamat kontrak Anda

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

console.log("Contract Address:", CONTRACT_ADDRESS);

// Coba panggil fungsi `getDelivery`
const trackingNumber = "TRACKING_NUMBER";
contract.methods.getDelivery().call()
  .then((result) => {
    console.log("Delivery Info:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  web3.eth.net.isListening()
  .then(() => console.log("Connected to blockchain!"))
  .catch(e => console.error("Failed to connect to blockchain:", e));