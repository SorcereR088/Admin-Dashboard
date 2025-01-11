import { pool } from '../db.js';

export const allClients = async (req, res) => {
    try {
        const allClients = await pool.query('SELECT * FROM  user_details');
        
        if (allClients.rows.length === 0) {
          console.log("No clients found");
          return res.status(404).json({ message: "No CLients Found" });
        }
        
        res.json(allClients.rows);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
      }
};