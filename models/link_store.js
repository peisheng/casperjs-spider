"use strict";
module.exports=function (sequelize,DataTypes) {
    var  LinkStore= sequelize.define('link_store', {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        link_url: DataTypes.STRING,
        title: DataTypes.STRING,
        html_content: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        category_name: DataTypes.STRING,
        create_date: DataTypes.DATE,
        update_date:DataTypes.DATE
    },{timestamps:false});
    return LinkStore
}