import { Roles } from "./types/user"

export const todaysTotalSales = 10000.00
export const todaysTotalTables = 52
export const todaysOpenedSales = 1250.00
export const todaysTotalExpedntirue = 1250.00


export const areas = [
    {
        _id: 1,
        name: "Salon",
        tables: [
            {
                _id: "s1",
                name: "Masa 1",
            },
            {
                _id: "s2",
                name: "Masa 2"
            },
            {
                _id: "s3",
                name: "Masa 3"
            },
            {
                _id: "s4",
                name: "Masa 4"
            },
            {
                _id: "s5",
                name: "Masa 5"
            },
            {
                _id: "s6",
                name: "Masa 6"
            },
        ]
    },
    {
        _id: 2,
        name: "Bahçe",
        tables: [
            {
                _id: "b1",
                name: "Masa 1",
            },
            {
                _id: "b2",
                name: "Masa 2"
            },
            {
                _id: "b3",
                name: "Masa 3"
            },
            {
                _id: "b4",
                name: "Masa 4"
            },
            {
                _id: "b5",
                name: "Masa 5"
            },
            {
                _id: "b6",
                name: "Masa 6"
            },
        ]
    },
    {
        _id: 3,
        name: "Üst Kat",
        tables: [
            {
                _id: "uk1",
                name: "Masa 1",
            },
            {
                _id: "uk2",
                name: "Masa 2"
            },
            {
                _id: "uk3",
                name: "Masa 3"
            },
            {
                _id: "uk4",
                name: "Masa 4"
            },
        ]
    },
]

export const categories = [
    {
        id: 1,
        title: "Çaylar",
        color: 'green'
    },
    {
        id: 2,
        title: "Sıcak İçecekler",
        color: 'red'
    },
    {
        id: 3,
        title: "Kahveler",
        color: 'brown'
    },
    {
        id: 4,
        title: "Soğuk İçecekler",
        color: 'aqua'
    },
    {
        id: 5,
        title: "Tatlılar",
        color: 'pink'
    },
    {
        id: 6,
        title: "Aperatifler",
        color: 'orange'
    },
    {
        id: 7,
        title: "Ana Yemekler",
        color: 'yellow'
    },
    {
        id: 8,
        title: "Atıştırmalıklar",
        color: 'purple'
    },
    {
        id: 9,
        title: "Dondurmalar",
        color: 'lightblue'
    },
    {
        id: 10,
        title: "İçecekler",
        color: 'teal'
    },
    {
        id: 11,
        title: "Alkolsüz İçecekler",
        color: 'lightgreen'
    },
    {
        id: 12,
        title: "Alkol İçkiler",
        color: 'darkred'
    },
    {
        id: 13,
        title: "Meyveler",
        color: 'orange'
    },
    {
        id: 14,
        title: "Sebzeler",
        color: 'green'
    },
    {
        id: 15,
        title: "Ekmek ve Ürünleri",
        color: 'wheat'
    },
    {
        id: 16,
        title: "Pizza ve Makarna",
        color: 'tomato'
    },
    {
        id: 17,
        title: "Süt Ürünleri",
        color: 'lightyellow'
    },
    {
        id: 18,
        title: "Beyaz Et",
        color: 'lightpink'
    },
    {
        id: 19,
        title: "Kırmızı Et",
        color: 'darkred'
    },
    {
        id: 20,
        title: "Deniz Ürünleri",
        color: 'skyblue'
    }
];


export const products = [
    {
        id: 1,
        categoryId: 1,
        name: "Çay",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: 2,
        categoryId: 1,
        name: "Orelet",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: 3,
        categoryId: 1,
        name: "Fincan Çay",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: -1,
        categoryId: 1,
        name: "Fincan Çay",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: 4,
        categoryId: 2,
        name: "Sıcak Çikolata",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 5,
        categoryId: 2,
        name: "Salep",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 6,
        categoryId: 3,
        name: "Türk Kahvesi",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 7,
        categoryId: 3,
        name: "Filtre Kahve",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 8,
        categoryId: 3,
        name: "Dibek Kahvesi",
        price: 100.00,
        unit: "Adet"
    },
]

export const orders = [
    {
        id: 1,
        areaId: 1,
        tableId: "s1",
        items: [
            {
                productId: 1,
                quantity: 2
            },
            {
                productId: 2,
                quantity: 3
            },
        ],
        status: "preparing",
    },
    {
        id: 2,
        areaId: 2,
        tableId: "b4",
        items: [
            {
                productId: 4,
                quantity: 2
            },
            {
                productId: 2,
                quantity: 3
            },
        ],
        status: "preparing",
    },

]

export const users = [
    {
        id: 1,
        no: 1,
        fullName: "Ferhat Yesari",
        email: "test@gmail.com",
        phoneNumber: "5552221122",
        role: Roles.MANAGER,
    },
    {
        id: 2,
        no: 2,
        fullName: "Micheal Scofield",
        email: "msco@gmail.com",
        phoneNumber: "5552221122",
        role: Roles.CHECKOUT,
    },
    {
        id: 3,
        no: 3,
        fullName: "Andrew Garfield",
        email: "agar@gmail.com",
        phoneNumber: "5552221122",
        role: Roles.WAITER,
    },
]

export const companyInfo = {
    title: "Fibonacci",
    dayStart: "10:00",
    dayEnd: "23:59",
    notificationSound: ["Ses 1", "Ses 2"],
    workType: ['Masa Siparişi', 'Paket Siparişi', 'Gel Al Sipariş'],
    socketAdres: "0",
    screenLockTime: 0,
    changeTableTime: 0,
    country: "Turkey",
    city: 'Elazığ',
    district: 'Merkez',
    neighborhood: "A Mahallesi",
    street: 'B sokak',
    no: 23,
    address: " Fibonacci cafe ",
    zipCode: 23100
}

export const paymentTypes = [
    "Nakit", "Kredi Kartı", "Diğer"
]