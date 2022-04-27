const Reader = require('./../utils/Reader');

class PartnerService{
    static filterPartnersEmailWithCertification(partners){
        return partners.filter( partner => {
            if(partner.haveCertification) return partner.email;
        });
    }

    static filterPartnersCredits(partners, limit){
        return partners.filter(partner => {
            if(partner.credits > limit) return partner;
        });
    }
}

module.exports = PartnerService;