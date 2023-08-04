'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('Transacoes', {
      idtransacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idfkusuario: {
        type: DataTypes.INTEGER,
        references: { model: 'Usuarios', key: 'idusuario' }
      },
      idfkcredito: {
        type: DataTypes.INTEGER,
        references: { model: 'Creditos', key: 'idcredito' }
      },
      tipotransacao: {
        type: DataTypes.STRING
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
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Perguntas');
  }
};