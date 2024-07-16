const express = require('express');
const body_parser=require('body-parser');
const { ServerConfig,DatabaseConfig } = require('./config');
const apiRoutes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(body_parser.json());
app.use('/api', apiRoutes);

DatabaseConfig.dbConnect() ;
app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
  