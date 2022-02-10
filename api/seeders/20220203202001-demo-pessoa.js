'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Pessoas', [
        {
          nome: 'Poliane Duarte',
          ativo: true,
          email: 'pollduarte@mail.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'João Marcos',
          ativo: true,
          email: 'joao.marcos@mail.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Elza Aires Duarte',
          ativo: true,
          email: 'elzaduarte@mail.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'João Alderico',
          ativo: true,
          email: 'joaoalderico@mail.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Paula Morais',
          ativo: true,
          email: 'paula.morais@mail.com',
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sérgio Lopes',
          ativo: true,
          email: 'sergiolopes@mail.com',
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date()
        }

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};
