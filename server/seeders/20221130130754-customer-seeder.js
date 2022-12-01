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
    const customers = [
      {
        name: "PT ABC",
        email: "abc@company.com",
        phoneNumber: "081234567890",
        address: "Jl. Raya No. 1",
        discount: 0,
        discType: "percent",
        imgKtp: "https://img.okezone.com/content/2020/12/25/337/2333921/ktp-atas-nama-slamet-hari-natal-bikin-heboh-media-sosial-qAAwvp0Uk9.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Makmur Jaya",
        email: "makmurjaya@company.com",
        phoneNumber: "081234567890",
        address: "Jl. Raya No. 2",
        discount: 0,
        discType: "nominal",
        imgKtp: "https://img.okezone.com/content/2020/12/25/337/2333921/ktp-atas-nama-slamet-hari-natal-bikin-heboh-media-sosial-qAAwvp0Uk9.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]
    await queryInterface.bulkInsert('Customers', customers, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Customers', null, {})
  }
};
