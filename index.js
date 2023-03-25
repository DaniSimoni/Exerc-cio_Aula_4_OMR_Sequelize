(async()=> {

    const database = require('./db');
    const Equipamento = require('./equipamento');
    await database.sync();

 /*    const novoEquipamento = await Equipamento.create({

        nome: 'Altere',
        preco: 85,
        descricao: 'Equipamento para malhar'

    })

    console.log(novoEquipamento); */



    const equipamentos = await Equipamento.findByPk(3);
    console.log(equipamentos);


    equipamentos.descricao = 'ALterei a descrição';
   /*  equipamentos.nome = 'Aparelho para pernas' */
  
    equipamentos.save();

    await equipamentos.destroy(3);

})();

