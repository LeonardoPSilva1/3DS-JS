import pessoa from "./Pessoas.js";
import { pessoas } from "./Pessoas.js";
import mostrarIMC from "./IMC.js";
import { categoria } from "./IMC.js";
import { rodarIMC } from "./IMC.js";

rodarIMC(pessoas);
mostrarIMC(pessoa);
categoria();

console.log(pessoa)