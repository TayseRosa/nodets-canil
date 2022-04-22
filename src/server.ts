import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

dotenv.config();

const server = express();

/* Config Template Engine */
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

/* Config Pasta pública */
server.use(express.static(path.join(__dirname, '../public')));

/* Rotas */
server.use(mainRoutes)

/* Página de não encontrado */
server.use((req, res)=>{
  res.render('pages/404');
})

/* Servidor rodando.. */
server.listen(process.env.PORT);