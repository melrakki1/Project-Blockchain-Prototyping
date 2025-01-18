// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedMarketplace {
    // Enum untuk mendefinisikan status produk
    enum Status { Available, Sold, WaitingConfirmation, Completed }

    // Struct untuk menyimpan data produk
    struct Product {
        uint id;               
        string name;           
        string description;    
        uint price;            
        address payable seller; 
        address buyer;         
        Status status;         
        string trackingNumber; 
    }

    // Variabel untuk menghitung jumlah produk yang terdaftar
    uint public productCount;

    // Mapping untuk menghubungkan ID produk dengan detail produk
    mapping(uint => Product) public products;
    // Event untuk mencatat produk yang berhasil terdaftar
    event ProductRegistered(uint id, string name, address seller);
    // Event untuk mencatat produk yang berhasil dibeli
    event ProductPurchased(uint id, address buyer);
    // Event untuk mencatat saat nomor resi ditambahkan
    event TrackingNumberAdded(uint id, string trackingNumber);

    // Event untuk mencatat saat pesanan dikonfirmasi oleh pembeli
    event OrderConfirmed(uint id, address buyer);

    // Modifier untuk memastikan hanya penjual yang bisa melakukan fungsi tertentu
    modifier onlySeller(uint _id) {
        require(products[_id].seller == msg.sender, "Hanya penjual yang dapat melakukan ini.");
        _;
    }

    // Modifier untuk memastikan hanya pembeli yang bisa melakukan fungsi tertentu
    modifier onlyBuyer(uint _id) {
        require(products[_id].buyer == msg.sender, "Hanya pembeli yang dapat melakukan ini.");
        _;
    }

    // Fungsi untuk mendaftarkan produk baru
    function registerProduct(string memory _name, string memory _description, uint _price) external {
        // Validasi harga harus lebih besar dari 0
        require(_price > 0, "Harga harus lebih besar dari 0");

        // Meningkatkan jumlah produk yang terdaftar
        productCount++;

        // Menambahkan produk baru ke dalam mapping products
        products[productCount] = Product({
            id: productCount,           
            name: _name,                
            description: _description,  
            price: _price,              
            seller: payable(msg.sender), 
            buyer: address(0),          
            status: Status.Available,   
            trackingNumber: ""          
        });

        
        emit ProductRegistered(productCount, _name, msg.sender);
    }

    // Function untuk membeli produk
    function buyProduct(uint _id) external payable {
        // Mengambil data produk yang dibeli berdasarkan ID
        Product storage product = products[_id];
        // Validasi bahwa produk ditemukan
        require(product.id == _id, "Produk tidak ditemukan");
        // Validasi bahwa produk dalam status Available (tersedia)
        require(product.status == Status.Available, "Produk tidak tersedia");
        // Validasi bahwa jumlah Ether yang dikirim sesuai dengan harga produk
        require(msg.value == product.price, "Jumlah Ether tidak sesuai harga produk");
        // Validasi bahwa pembeli tidak bisa membeli produk yang dijualnya sendiri
        require(msg.sender != product.seller, "Penjual tidak dapat membeli produknya sendiri");

        // Menandai pembeli dan mengubah status produk menjadi Sold
        product.buyer = msg.sender;
        product.status = Status.Sold;

        
        emit ProductPurchased(_id, msg.sender);
    }

    // Fungsi untuk menambahkan nomor resi oleh penjual
    function addTrackingNumber(uint _id, string memory _trackingNumber) external onlySeller(_id) {
        // Mengambil data produk
        Product storage product = products[_id];
        // Validasi bahwa produk sudah dibeli (status Sold)
        require(product.status == Status.Sold, "Produk harus sudah dibeli sebelum menambahkan nomor resi");
        // Menambahkan nomor resi
        product.trackingNumber = _trackingNumber;
        // Mengubah status produk menjadi WaitingConfirmation (menunggu konfirmasi dari pembeli)
        product.status = Status.WaitingConfirmation;

        
        emit TrackingNumberAdded(_id, _trackingNumber);
    }

    // Fungsi untuk mengonfirmasi pesanan oleh pembeli
    function confirmOrder(uint _id) external onlyBuyer(_id) {
        // Mengambil data produk
        Product storage product = products[_id];

        // Validasi bahwa produk menunggu konfirmasi
        require(product.status == Status.WaitingConfirmation, "Pesanan tidak menunggu konfirmasi");

        // Validasi bahwa nomor resi sudah ada
        require(bytes(product.trackingNumber).length > 0, "Nomor resi belum tersedia");

        // Mengubah status produk menjadi Completed (selesai)
        product.status = Status.Completed;

        // Mengirimkan pembayaran ke penjual
        product.seller.transfer(product.price);

        // Menyemit event bahwa pesanan telah dikonfirmasi
        emit OrderConfirmed(_id, msg.sender);
    }

    // Fungsi untuk mendapatkan informasi detail produk berdasarkan ID
    function getProduct(uint _id) external view returns (
        uint, string memory, string memory, uint, address, address, Status, string memory
    ) {
        // Mengambil data produk berdasarkan ID
        Product memory product = products[_id];

        // Mengembalikan data produk lengkap
        return (
            product.id,
            product.name,
            product.description,
            product.price,
            product.seller,
            product.buyer,
            product.status,
            product.trackingNumber
        );
    }
}
