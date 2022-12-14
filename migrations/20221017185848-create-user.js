'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            full_name: {
                type: Sequelize.STRING,
            },
            email: {
                unique: true,
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.STRING,
            },
            role: {
                type: Sequelize.STRING,
            },
            balance: {
                type: Sequelize.INTEGER,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('User');
    },
};
