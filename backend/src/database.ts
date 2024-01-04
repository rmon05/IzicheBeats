import mysql from "mysql2";
import { config } from "dotenv"
if (process.env.NODE_ENV !== 'production') {
    config();
}

// create a mySQL connection pool with promise
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DB,
}).promise()


// retrieve file path for one price
const getInfoFromPrice = async(priceID:string) => {
    try {
        // establish connection
        const connection = await pool.getConnection();

        // get corresponding row
        const [rows, fields] = await connection.execute(
            'SELECT file_path, title FROM beats WHERE price_id = ?',
            [priceID]
        );

        if (rows.length > 0) {
            // File path found, returning the first result
            return {file_path: rows[0].file_path, title: rows[0].title};
        } else {
            // No matching price_id found
            return null;
        }
    } catch (error) {
        console.error('Error fetching file path:', error.message);
        throw error;
    }
}

// do everything concurrently
export const getAllFromPrices = async (priceIds:string[]) => {
    try {
        // Use Promise.all with map to execute getFilePathAndTitleFromPrice for each priceId
        const filePaths = await Promise.all(
            priceIds.map(priceId => getInfoFromPrice(priceId))
        );
        return filePaths;
    } catch (error) {
        console.error('Error fetching file paths and titles:', error.message);
        throw error;
    }
};
