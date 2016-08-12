
function LinkStroe (sequelize,DataTypes) {
   var  LinkStore= sequelize.define('link_store', {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        link_url: Sequelize.STRING,
        title: Sequelize.STRING,
        html_content: Sequelize.STRING,
        category_id: Sequelize.INTEGER,
        category_name: Sequelize.STRING,
        create_date: Sequelize.DATE
    });
    return LinkStore
}

exports.LinkStore=LinkStroe;