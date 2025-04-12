import express from "express";
import sequelize from "./config/database/db.js";
import LivreRouter from "./src/routes/LivreRoutes.js";

const app = express();
app.use(express.json());
app.use('/api/v1/livres', LivreRouter);
app.listen(process.env.SERVER_PORT,async()=>{
    await sequelize.sync({alter:true,force:true});
    console.log(`running on port ${process.env.SERVER_PORT}`)
    console.log("Type de password :", typeof process.env.DB_PASSWORD);
})