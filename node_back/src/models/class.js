module.exports = (sequelize, DataTypes) =>{
    const Class = sequelize.define('class',{
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        thumbnail: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },{
        timestamps: false,
        tableName: 'class',
    });

    Class.associate = function (models) {
        Class.belongsTo(models.category, {
            foreignKey: 'category_id',
            onDelete: 'cascade',
        });
    };

    Class.associate = function (models) {
        Class.hasone(models.class_detail, {
            foreignKey: 'class_id',
            onDelete: 'cascade',
        });
    };

    Class.associate = function (models) {
        Class.hasMany(models.class_content, {
            foreignKey: 'class_id',
            onDelete: 'cascade',
        });
    };

    Class.associate = function (models) {
        Class.hasMany(models.class_option, {
            foreignKey: 'class_id',
            onDelete: 'cascade',
        });
    };

    Class.associate = function (models) {
        Class.hasMany(models.class_material, {
            foreignKey: 'class_id',
            onDelete: 'cascade',
        });
    };

    return Class;
};