import { navMain } from "./nav.mjs";
import { artMain } from "./art.mjs";
import { comMain } from "./com.mjs";
import { infoMain } from "./info.mjs";

const API_TOKEN = "0e52eec14f3689141de9a1c48cf6572e292eb3bc18c872f1c2a41c6cbb8eddd50a1549a634e420563c7b960b01398577add350a75de77f17ced99e48d47c600da20d52e123e39707568efb1ac64a2380ce0a540c5a3c4f18cb0e1494f8770860d08b1996c96f8a4ba421b68210609cdf68140ef0f71ef87c1adbe8fda65116e2";
const API_URL = "https://louise-mertens-cms.kolbgrafik.de/";
async function getData(type) {
    try {
        const data = await fetch(`${API_URL}/api/${type}?populate=deep`, {headers: {
            'Authorization': `bearer ${API_TOKEN}`
        }})
        return await data.json();
    } catch (e) {
        console.error(e);
    }
}
async function buildDatabase() {
    const commissions = await getData("commissions");
    const artworks = await getData("artworks");
    const informations = await getData("information");

    return {
        commissions: commissions,
        artworks: artworks,
        informations: informations,
    }
}
var commissions, artworks, informations;
await buildDatabase().then(v => {
    commissions = v.commissions;
    artworks = v.artworks;
    informations = v.informations;
})

var initArtworks = function() {
    artMain(artworks);
}
var initCommissions = function () {
    comMain(commissions);
}
var initInfo = function() {
    infoMain(informations);
}
var initNav = function() {
    navMain();
}

function main() {
    initArtworks();
    initInfo();
    initNav();
    initCommissions();
}

main();


