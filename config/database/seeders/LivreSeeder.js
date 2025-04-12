import sequelize from "../db.js";
import Livre from "../../../src/models/LivreModel.js";
import dotenv from "dotenv";

dotenv.config()

const seederLivres = async()=>{
    try {
        sequelize.authenticate()
        console.log('debut du seed de la base ')
        const livres = [
            { ISBN: "1111111111111", Description: "premier livre " },
            { ISBN: "2222222222222", Description: "deuwième livre " },
            { ISBN: "3333333333333", Description: "troisième livre " },
            { ISBN: "4444444444444", Description: "quatrième livre " },
            { ISBN: "5555555555555", Description: "cinquième livre " },
          ];
          await Livre.bulkCreate(livres,{ignoreDuplicates:false})
          console.log("fin du seed des livres")
          process.exit()
    } catch (error) {
        console.error("Erreur pendant le seed :", error);
        process.exit(1);
    }
}
 seederLivres()