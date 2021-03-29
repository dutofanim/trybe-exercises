let characters = {
  character1 : {
    info: {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
    }
  },
  character2 : {
    info: {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: 'O último MacPatinhas'
    }
  }
};

console.log('Bem-vinda,', characters.character1.info.personagem);

// info['recorrente'] = 'Sim';

function addNewObjectKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
};

addNewObjectKeyAndValue(characters.character1.info, 'recorrente', 'Sim');
addNewObjectKeyAndValue(characters.character2.info, 'recorrente', 'Sim');
console.log(characters);

for (var key in characters.character1.info) {
  console.log(key);
};

for (var key in characters.character1.info) {
  console.log(characters.character1.info[key]);
};

for (let info in characters.character1.info) {
  if (characters.character1.info[info] === 'Sim' && characters.character1.info[info] === 'Sim') {
    console.log('Ambos recorrentes')
  } else {
    console.log(characters.character1.info[info], 'e', characters.character2.info[info]);
  }
};