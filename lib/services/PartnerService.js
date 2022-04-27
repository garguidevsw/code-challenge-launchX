const Reader = require('./../utils/Reader');

class PartnerService{
    static filterPartnersEmailWithCertification(partners){
        const filterPartners = partners.filter( partner => partner.haveCertification );

        return filterPartners.map( partner => partner.email );
    }

    static filterPartnersCredits(partners, limit){
        return partners.filter(partner => {
            if(partner.credits > limit) return partner;
        });
    }
}

module.exports = PartnerService;