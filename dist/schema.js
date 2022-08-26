import { buildSchema } from 'graphql';
var schema = buildSchema("\n  type Query {\n    findSatellites(limit: Int, skip: Int): [Satellite]\n    findCountries(limit: Int, skip: Int): [Country]\n    findOneSatellite(id: ID): Satellite\n    findOneCountry(id: ID): CountryWithSatellites\n  }\n\n  type CountryWithSatellites {\n    country: Country\n    satellites: [Satellite]\n  }\n\n   type Satellite {\n     _id: ID!\n     docType: String\n     name: String\n     category: String\n     description: String\n     tasks: String\n     carrierRocket: String\n     startupDate: [Int]\n     flightDuration: [Int]\n     countries: [String]\n   }\n\n   type Country {\n     _id: ID!\n     docType: String\n     name: String\n     carrierRockets: [CarrierRocket]\n     firstSatelliteStartup: FirstSatelliteStartup\n   }\n\n   type CarrierRocket {\n     name: String\n     description: String\n   }\n\n   type FirstSatelliteStartup {\n     name: String\n     date: [Int]\n   }\n ");
export default schema;