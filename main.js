require('./infra/services/Utils');

const PopulationControl = require('./infra/services/PopulationControl');
const IOops = require('./infra/services/IO_Operations');
const CitiesDistances = require('./infra/services/ImportCitiesDistances');

parameters = {
    file: './misc/input/100CIT.txt',
    population: 5,
    tax_crossover: 0.75,
    tax_mutation: 0.1,
    stop_condition: 'not-better',
    stop_param: '40',
    selection_algorithm: 'roleta',
    population_selection: 'elitismo'
}

let cities = IOops.CITRead(parameters.file);
let distanceMatrix = CitiesDistances.getMatrix(cities, parameters.file);

PopulationControl(cities, distanceMatrix, parameters);