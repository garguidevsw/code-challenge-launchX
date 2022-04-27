const Reader = require('./../utils/Reader');

class PartnerService{
    static getAllPartners(){
        const partners = Reader.readJsonFile("visualpartners.json");

        return partners;
    }
}

module.exports = PartnerService;