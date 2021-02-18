module.exports = (sequelize, DataTypes) =>{
    const ClassDetail = sequelize.define('class_detail',{
        image:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        information:{
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        timestamps: false,
        tableName: 'class_detail',
    });

    ClassDetail.associate = function (models) {
        ClassDetail.belongsTo(models.class, {
            foreignKey: 'class_id',
            onDelete: 'cascade',
        });
    };

    return ClassDetail;
};