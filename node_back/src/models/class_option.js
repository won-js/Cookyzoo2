module.exports = (sequelize, DataTypes) =>{
    const ClassOption = sequelize.define('class_option',{
        name:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        thumbnail: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        timestamps: false,
        tableName: 'class_option',
    });

    ClassOption.associate = function (models) {
        ClassOption.belongsTo(models.class, {
            foreignKey: 'class_id',
            onDelete: 'cascade',
        });
    };

    return ClassOption;
};