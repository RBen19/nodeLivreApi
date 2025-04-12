import * as livreServices from "../services/LivreServices.js";
import { request, response } from "express";

const getAll = async (request, response) => {
    try {
        const allLivres = await livreServices.getAllLivres();
        response.status(200).json(allLivres);
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: error.message })
    }
};
const getLivreById = async (request, response) => {
    try {
        const idLivres = request.params.id
        if (isNaN(idLivres)) {
            return response.status(400).json({ error: 'ID invalide' });
        }
        const getLivre = await livreServices.getLivreById(idLivres)
        console.log(getLivre)
        if (getLivre == null) {
            response.status(404).json({ error: "aucun trouve livre " })
            return;
        }
        response.status(200).json(getLivre);
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: error.message })
    }
};
const store = async (request, response) => {
    try {

        const { ISBN, Description } = request.body;
        console.log(ISBN)
        if (ISBN.length != 13 || Description.length < 5) {
            response.status(400).json({ error: "un ISBN doit avoir 13 caractères une description au moins 5 mots " });
            return;
        }
        let verifisbn = await livreServices.findByISBN(ISBN)

        if (verifisbn != null) {
            return response.status(409).json({ error: "cet isbn existe déjà" });
        }
        const saveData = await livreServices.storeLivre(request.body);
        if (saveData == null) {
            return response.status(500).json({error:"erreur lors de l'enregistrement du livre "})
        }
        return response.status(201).json(saveData);

    } catch (error) {
        console.log(error)
        response.status(500).json({ error: error.message })
    }
};
const deleted = async(request,response)=>{
    console.log('debut de fonction')
    const isbn = request.params.isbn;
    let  isFind = await livreServices.findByISBN(isbn)
    if(isFind==null){
        return response.status(404).json({error:"aucun livre n'a cet isbn"})
    }
    let isDeleted = await  livreServices.deleteLivre(isbn)
    console.log(isDeleted)
    if(isDeleted==0){
        return response.status(500).json({error:"erreur lors de la suppression"})
    }
    return response.status(204).json("suppression réussit")

};
const updateLivre = async(request,response)=>{

    const { ISBN, Description } = request.body;
    console.log(ISBN)
    if (ISBN.length != 13 || Description.length < 5) {
        response.status(400).json({ error: "un ISBN doit avoir 13 caractères une description au moins 5 mots " });
        return;
    }
    let verifisbn = await livreServices.findByISBN(ISBN)

    if (verifisbn == null) {
        return response.status(404).json({ error: "cet isbn n'existe pas" });
    }
    let isUpdate = await livreServices.updateLivre(request.params.isbn,request.body)
    if(isUpdate==null){
        return response.status(500).json({error:"erreur lors de la mise à jour"})

    }
    response.status(200).json(isUpdate)

}
export {
    getAll,
    getLivreById,
    store,
    deleted,
    updateLivre
}