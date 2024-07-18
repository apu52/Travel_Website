const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE_URL:process.env.DATABASE_URL,
    JWT_KEY:process.env.JWT_SECRET_KEY,
    TOKEN_EXP:process.env.TOKEN_EXP,
    // JWT_REFRESH_SECRET_KEY:process.env.JWT_REFRESH_SECRET_KEY,
    // REFRESH_TOKEN_EXP:process.env.REFRESH_TOKEN_EXP,
    // cacheTemporayTokenExpiresIn:process.env.cacheTemporayTokenExpiresIn,
    // cacheTemporayTokenPrefix:process.env.cacheTemporayTokenPrefix
}