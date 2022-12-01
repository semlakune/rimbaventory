'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const products = [
      {
        name: "Baju djokdja",
        unit: "pcs",
        stock: 10,
        price: 100000,
        img: "https://dagadu.co.id/2159-home_default/kaos-dagadu-original-lengan-pendek-dj-okdja-hitam.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Baju rukun",
        unit: "pcs",
        stock: 10,
        price: 100000,
        img: "https://dagadu.co.id/2152-home_default/kaos-dagadu-original-lengan-pendek-rukun-crah-hitam.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Baju nigh rider",
        unit: "pcs",
        stock: 10,
        price: 100000,
        img: "https://dagadu.co.id/2167-home_default/kaos-dagadu-original-lengan-pendek-night-rider-hitam.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Baju i'm busi",
        unit: "pcs",
        stock: 10,
        price: 100000,
        img: "https://dagadu.co.id/2189-home_default/kaos-dagadu-original-lengan-pendek-i-m-busi-blue-steel.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Baju i'm becak",
        unit: "pcs",
        stock: 10,
        price: 100000,
        img: "https://dagadu.co.id/2194-home_default/kaos-dagadu-original-lengan-pendek-becak-putih.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('Products', products)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {})
  }
};
