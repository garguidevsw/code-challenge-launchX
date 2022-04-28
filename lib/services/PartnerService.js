class PartnerService{

    static filterPartnersEmailWithCertification(partners = []){
        if(partners == null) return [];
        const filterPartners = partners.filter( partner => partner.haveCertification );

        return filterPartners.map( partner => partner.email );
    }

    static filterPartnersCredits(partners = [], limit = 500){
        if(partners == null) return [];
        return partners.filter(partner => {
            if(partner.credits > limit) return partner;
        });
    }
}

module.exports = PartnerService;