module.exports = (sequelize, DataTypes) =>{
    const Category = sequelize.define('category',{
        name:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
    },{
        timestamps: false,
        tableName: 'category',
    });

    Category.associate = function (models) {
        Category.hasMany(models.class, {
            foreignKey: 'category_id',
            onDelete: 'cascade',
        });
    };
    return Category;
};