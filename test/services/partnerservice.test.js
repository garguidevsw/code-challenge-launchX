const PartnerService = require("../../lib/services/PartnerService");


describe("Test PartnerService", () => {
    test("filter Partners with certification ", () => {
        const partners = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": false
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 210,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": true
        }];

        const resp = PartnerService.filterPartnersEmailWithCertification(partners);

        expect(resp.length).toBe(2);
    });

    test("filter Partners with certification - partners = null ", () => {
        const partners = null;

        const resp = PartnerService.filterPartnersEmailWithCertification(partners);

        expect(resp.length).toBe(0);
    });

    test("filter Partners with certification - partners = undefined ", () => {
        const partners = undefined;

        const resp = PartnerService.filterPartnersEmailWithCertification(partners);

        expect(resp.length).toBe(0);
    });

    test("filter Partners with credits greater than 500", () => {
        const partners = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": false
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 210,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": true
        }];

        const resp = PartnerService.filterPartnersCredits(partners, 500);

        expect(resp.length).toBe(2);
    });

    test("filter Partners with credits greater than 500 - partners = undefined", () => {
        const partners = undefined;

        const resp = PartnerService.filterPartnersCredits(partners, 500);

        expect(resp.length).toBe(0);
    });

    test("filter Partners with credits greater than 500 - partners = null", () => {
        const partners = null;

        const resp = PartnerService.filterPartnersCredits(partners, 500);

        expect(resp.length).toBe(0);
    });

    test("filter Partners with credits - no arguments", () => {

        const resp = PartnerService.filterPartnersCredits();

        expect(resp.length).toBe(0);
    });

});