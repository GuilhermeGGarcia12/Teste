'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('Creditos', {
      idcredito: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    await queryInterface.sequelize.query("insert into Creditos (descricao, createdAt, updatedAt) values ('debito', '2023-08-04 17:38:01','2023-08-04 17:38:01')")
    return queryInterface.sequelize.query("insert into Creditos (descricao, createdAt, updatedAt) values ('credito', '2023-08-04 17:38:01','2023-08-04 17:38:01')")
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Creditos');
  }
};
