import { pool } from '../db.js';

export const allProperties = async (req, res) => {
  try {
    const allProperties = await pool.query(`
      SELECT p.title, p.property_type, p.price, u.user_name AS hosted_by
      FROM property_listing_details p
      INNER JOIN user_details u ON p.user_id = u.user_id
    `);

    if (allProperties.rows.length === 0) {
      console.log("No properties found.");
      return res.status(404).json({ message: "No properties available." });
    }
    
    res.json(allProperties.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
