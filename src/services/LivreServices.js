import { response,request }  from "express";
import sequelize from "../../config/database/db.js";
import Livre from "../models/LivreModel.js";

    const getAllLivres=  async ()=>{
        let allLivres = [];
        try {
           allLivres =  await Livre.findAll();
           // response.status(200).json(allLivres)
        } catch (error) {
            console.error(error);
         //   response.status(500).json({ error: 'Erreur serveur' });
        }
        return allLivres;
    };
    const getLivreById = async(id)=>{

        

        try {
          const  livre = await Livre.findByPk(id)
          if(!livre){

          }else{
            return livre
          }
        } catch (error) {
            console.log(error)
        }
      
       ;
    };
    const storeLivre = async(ISBN,Description)=>{
        const t = await sequelize.transaction();
        let isDone = 0;
        let  livre = null
        try {
          livre =  await  Livre.create(ISBN,Description, { transaction: t })
          await t.commit();
        return livre || null
        } catch (error) {
            await t.rollback();
            console.log(error);
        }
       return livre;
    };
    const findByISBN = async(isbn)=>{
        let isDone = 0;
        try {
          let livre  = await Livre.findOne({where:{ISBN:`${isbn}`}})
          return livre || null
           isDone = 1;
        } catch (error) {
            console.log(error)
            
        }
        console.log(isDone+"findByISBN")
        console.log(livre)
    };
    const updateLivre = async(isbn,data)=>{
        let done = 0;
        try {

            const [updatedRows] = await Livre.update(data, { where: { ISBN: isbn } });
            if (updatedRows === 0) {
                return null; 
              }
          
              const updatedLivre = await Livre.findOne({ where: { ISBN: isbn } });
              return updatedLivre || null;
          
        } catch (error) {
            console.log(error)
        }
        return done;
    };
    const deleteLivre = async(isbn)=>{
        let isDone = 0
        try {
            let livre  = await Livre.destroy({where:{ISBN:`${isbn}`}})
            if (livre != null) {
                return livre
            }

           
        } catch (error) {
            console.log(error)
            return error
        }
    }
   

export {
    getAllLivres,
    getLivreById,
    storeLivre,
    updateLivre,
    deleteLivre,
    findByISBN
};
