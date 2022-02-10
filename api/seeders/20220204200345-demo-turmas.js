module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Turmas', [
			{
				data_inicio: "2022-03-01",
				nivel_id: 1,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				data_inicio: "2022-03-01",
				nivel_id: 2,
				docente_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				data_inicio: "2022-03-01",
				nivel_id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				data_inicio: "2022-07-01",
				nivel_id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Turmas', null, {})
  }
}
