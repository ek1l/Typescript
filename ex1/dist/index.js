var spaceship = {
    name: '',
    pilot: '',
    crewLimit: 0,
    crew: [],
    inMission: true,
};
var spaceShipSave = function (name, pilot, crewLimit, crew, inMission) {
    spaceship.name = name;
    spaceship.pilot = pilot;
    spaceship.crewLimit = crewLimit;
    spaceship.crew = crew;
    spaceship.inMission = inMission;
};
var addCrew = function () {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert("ERRO: O n\u00FAmero m\u00E1ximo de tripulantes \u00E9 ".concat(spaceship.crewLimit));
        return;
    }
    var newCrew = prompt('Digite o nome do tripulante');
    spaceship.crew.push(newCrew);
    alert("Tripulante ".concat(newCrew, " adicionado. N\u00FAmero m\u00E1ximo de tripulantes \u00E9 ").concat(spaceship.crewLimit));
    var confirmacaoCrew = confirm('Você deseja adicionar mais um tripulante?');
    if (confirmacaoCrew) {
        addCrew();
    }
};
var namePrompt = prompt('Digite o nome da nave:');
var pilotNamePrompt = prompt('Digite o nome do piloto(a):');
var crewLimitPrompt = Number(prompt('Digite o tamanho máximo de tripulantes:'));
spaceShipSave(namePrompt, pilotNamePrompt, crewLimitPrompt, [], true);
addCrew();
