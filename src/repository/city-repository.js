const { City } = require('../models/city');

class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({name});
            return city; 
        } catch (error) {
            console.log ('error occured while creating City'); 
            throw(error);
        }
    }

    async deleteCity(cityID) {
        try {
            await City.destroy( {
                where:{
                    id: cityID
                }
            });
        } catch (error) {
            console.log('error occured while deleting the city');
            throw(error);
        }
    }

    async updateCity(cityID, data){
        try {
            const city = await City.update(data, {
                where:{
                    id: cityID
                }
            });
            return city;
            
        } catch (error) {
            console.log('error occured while updating the city');
            throw(error);
        }
    }

    async getCity(cityID){
        try {
            const city = await City.findByPk(cityID);
            return city; 
        } catch (error) {
            console.log('error occured while accessing the city');
            throw(error);
        }
    }



}

module.exports = CityRepository;