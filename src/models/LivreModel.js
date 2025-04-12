import sequelize from "../../config/database/db.js";
import { DataTypes } from "sequelize";

const Livre = sequelize.define('livres',{
    idLivres:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    ISBN:{
        type:DataTypes.STRING(13),
        unique:true,
    },
    Description:{
       type:DataTypes.STRING,
    }

});
export default Livre;