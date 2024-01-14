const spaceship = {
  name: '',
  pilot: '',
  crewLimit: 0,
  crew: [],
  inMission: true,
};

const spaceShipSave = (
  name: string,
  pilot: string,
  crewLimit: number,
  crew: string[],
  inMission: boolean,
) => {
  spaceship.name = name;
  spaceship.pilot = pilot;
  spaceship.crewLimit = crewLimit;
  spaceship.crew = crew;
  spaceship.inMission = inMission;
};

const addCrew = () => {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert(`ERRO: O número máximo de tripulantes é ${spaceship.crewLimit}`);
    return;
  }

  let newCrew = prompt('Digite o nome do tripulante');
  spaceship.crew.push(newCrew);
  alert(
    `Tripulante ${newCrew} adicionado. Número máximo de tripulantes é ${spaceship.crewLimit}`,
  );
  const confirmacaoCrew = confirm('Você deseja adicionar mais um tripulante?');
  if (confirmacaoCrew) {
    addCrew();
  }
};

const namePrompt = prompt('Digite o nome da nave:');
const pilotNamePrompt = prompt('Digite o nome do piloto(a):');
const crewLimitPrompt = Number(
  prompt('Digite o tamanho máximo de tripulantes:'),
);

spaceShipSave(namePrompt, pilotNamePrompt, crewLimitPrompt, [], true);
addCrew();
