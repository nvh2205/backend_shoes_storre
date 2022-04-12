module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Orders', 'shipmentCost', {
                type: Sequelize.INTEGER,
                defaultValue: 35000,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Orders', 'shipmentCost', {
                type: Sequelize.INTEGER,
            })
        ])
    }
};