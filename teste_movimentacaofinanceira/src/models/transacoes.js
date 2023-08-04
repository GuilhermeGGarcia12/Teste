module.exports = (sequelize, DataTypes) => {
    const Transacoes = sequelize.define('Transacoes', {
      idtransacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tipotransacao: {
        type: DataTypes.STRING,
        allowNull: false
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
    Transacoes.associate = (models) => {
        Transacoes.belongsTo(models.Usuarios,{foreignKey:"idusuarios",as:"idfkusuario"})
    }
    return Transacoes;
  }