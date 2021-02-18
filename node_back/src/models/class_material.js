module.exports = (sequelize, DataTypes) =>{
    const ClassMaterial = sequelize.define('class_material',{
        name:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        quantity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        timestamps: false,
        tableName: 'class_material',
    });

    ClassMaterial.associate = function (models) {
        ClassMaterial.belongsTo(models.class, {
            foreignKey: 'class_id',
            onDelete: 'cascade',
        });
    };

    return ClassMaterial;
};