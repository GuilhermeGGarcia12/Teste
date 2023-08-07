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
      valor: {
        type: DataTypes.FLOAT(15,8),
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
      Transacoes.belongsTo(models.Usuarios,{foreignKey:"idusuario",as:"idfkusuario"})
    }
    Transacoes.associate = (models) => {
      Transacoes.belongsTo(models.Creditos,{foreignKey:"idcredito",as:"idfkcredito"})
    }
    return Transacoes;
  }