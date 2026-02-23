import express from 'express';
import movieRoutes from "./routes/MoviesRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express()

app.use(express.json())

app.use("/movies", movieRoutes)
app.use("/auth", authRoutes)

const PORT = 3001;
const server = app.listen(PORT, () =>{
    console.log(`Server running on PORT: ${PORT}`)
});


