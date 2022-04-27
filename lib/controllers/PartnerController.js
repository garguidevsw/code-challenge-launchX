const PartnerService = require("../services/PartnerService");

class PartnerController {

    static getAllPartners(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return partners;
    }

    static getPartnersEmailWithCertification(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnerService.filterPartnersEmailWithCertification(partners);

    }

    static getPartnersCreditsWithLimit(credits){
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnerService.filterPartnersCredits(partners, credits);
    }
}

module.exports = PartnerController;