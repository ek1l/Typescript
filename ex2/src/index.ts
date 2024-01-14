type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado';

type PlanetCoordinates = [number, number, number, number];

type Planet = {
  name: string;
  coordinates: PlanetCoordinates;
  situation: PlanetSituation;
  satellites: string[];
};

const planets: Planet[] = [];

const addPlanet = (
  name: string,
  coordinates: PlanetCoordinates,
  situation: PlanetSituation,
) => {
  planets.push({
    name,
    coordinates,
    situation,
    satellites: [],
  });
  alert(`O planeta ${name} foi registrado com sucesso!`);
};

const findPlanet = (name: string) => {
  const planet = planets.find((planet) => planet.name === name);
  return planet ?? false;
};

const updateSituation = (situation: PlanetSituation, planet: Planet) => {
  planet.situation = situation;
  alert(
    `A situação do planeta ${planet.name} foi atualizada para ${situation}`,
  );
};

const addSatellite = (name: string, planet: Planet) => {
  planet.satellites.push(name);
  alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
};

const removeSatellite = (name: string, planet: Planet) => {
  planet.satellites = planet.satellites.filter(
    (satelites) => satelites !== name,
  );
  alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
};

const promptValidSituation = () => {
  let situation: PlanetSituation;
  let validSituation = false;
  while (!validSituation) {
    const situationInput = prompt(
      'Informe a situação do planeta: \n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado',
    );
    switch (situationInput) {
      case '1':
        situation = 'Habitado';
        validSituation = true;
        break;
      case '2':
        situation = 'Habitável';
        validSituation = true;
        break;
      case '3':
        situation = 'Inabitável';
        validSituation = true;
        break;
      case '4':
        situation = 'Inexplorado';
        validSituation = true;
        break;
      default:
        alert(`Situação inválida.`);
        validSituation = true;
    }
  }
  return situation;
};

const promptValidPlanet = (callback: (Planet) => void) => {
  const planetName = prompt('Informe o nome do planeta:');
  const planet = findPlanet(planetName);
  if (planet) {
    callback(planet);
  } else {
    alert(`Planeta não encontrado! Retornando ao menu...`);
  }
};

const firstMenuOption = () => {
  const name = prompt('Informe o nome do planeta:');
  const coordinateA = Number(prompt('Informe a primeira coordenada:'));
  const coordinateB = Number(prompt('Informe a segunda coordenada:'));
  const coordinateC = Number(prompt('Informe a terceira coordenada'));
  const coordinateD = Number(prompt('Informe a quarta coordenada:'));
  const situation = promptValidSituation();
  const confirmation = confirm(
    `Confirma o registro do planeta ${name} ? Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD}) Situação: ${situation}`,
  );
  if (confirmation) {
    addPlanet(
      name,
      [coordinateA, coordinateB, coordinateC, coordinateD],
      situation,
    );
  }
};

const secondMenuOption = () => {
  promptValidPlanet((planet) => {
    const situation = promptValidSituation();
    updateSituation(situation, planet);
  });
};

const thirdMenuOption = () => {
  promptValidPlanet((planet) => {
    const satellite = prompt('Informe o nome do  satélite a ser adicionado:');
    addSatellite(satellite, planet);
  });
};

const fourthMenuOption = () => {
  promptValidPlanet((planet) => {
    const satellite = prompt('Informe o nome do  satélite a ser removido:');
    removeSatellite(satellite, planet);
  });
};

const fifthMenuOption = () => {
  let list = 'Planetas: \n';
  planets.forEach((planet) => {
    const [a, b, c, d] = planet.coordinates;
    list += `Nome: ${planet.name}
    Coordenadas: (${a},${b},${c},${d})  
    Situação: ${planet.situation}  
    Satélites: ${planet.satellites.length}
    `;
    planet.satellites.forEach((satellite) => {
      list += ` - ${satellite}\n`;
    });
  });
  alert(list);
};

let userOption = 0;

while (userOption !== 6) {
  const menu = `Menu
     1 - Registrar um novo planeta
     2 - Atualizar situação do planeta
     3 - Adicionar um satélite ao planeta
     4 - Remover um satélite do planeta
     5 - Lista todos os planetas
     6 - Sair`;

  userOption = Number.parseInt(prompt(menu));
  switch (userOption) {
    case 1:
      firstMenuOption();
      break;
    case 2:
      secondMenuOption();
      break;
    case 3:
      thirdMenuOption();
      break;
    case 4:
      fourthMenuOption();
      break;
    case 5:
      fifthMenuOption();
      break;
    case 6:
      alert(`Encerrando o sistema...`);
      break;
    default:
      alert(`Opção inválida! Retornando ao painel principal...`);
      break;
  }
}
