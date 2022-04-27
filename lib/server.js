const express = require("express");
const PartnerController = require("./controllers/PartnerController");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"});
});

app.get("/v1/partners", (request, response) => {
    const partners = PartnerController.getAllPartners();
    response.status(200).json(partners);
});

app.get("/v1/partners/withCert", (request, response) => {
    const partners = PartnerController.getPartnersEmailWithCertification();
    response.status(200).json(partners);
});

app.get("/v1/partners/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    const partners = PartnerController.getPartnersCreditsWithLimit(credits);
    response.status(200).json({
        credits,
        partners
    });
});

app.listen(port, () => {
    console.log(`Code Challenge in localhost:${port}`);
});