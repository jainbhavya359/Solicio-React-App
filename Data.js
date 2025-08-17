import express from "express";
import pg from "pg";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "permalist",
    password: "pchykj",
    port: 5432
});

db.connect();

app.post('/api/contact', async (req, res) => {
  console.log(req);
  const { name, email, subject, message } = req.body;
  try {
    await db.query(
      `INSERT INTO msme_data (name, email, subject, message) VALUES ($1, $2, $3, $4)`,
      [name, email, subject, message]
    );
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('DB error:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.post("/api/loan", async (req, res) =>{
  const { loanName, lender, amount, panNum, date, name, email } = req.body;
  try{
    await db.query(
      `INSERT INTO msme_loan (name, email, loan, lender, amount, pan_number, date) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [name, email, loanName, lender, amount, panNum, date]
    );
    res.status(200).json({ message: 'Data saved successfully' });
  }catch(error){
    console.error('DB error:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.get("/api/getLoan", async(req, res) => {
  try{
    const data = await db.query("SELECT * FROM msme_loan");
    res.json(data.rows);
  }catch (err){
    console.error(err);
  }
});

app.get("/api/questions", async(req, res) => {
  try{
    const data = await db.query("SELECT * FROM msme_data");
    res.json(data.rows);
  }catch (err){
    console.error(err);
  }
});

app.get("/api/tips", async (req, res) => {
  try{
    const data = await db.query('SELECT * FROM msme_tips');
    res.json(data.rows);
  }catch(err){
    console.log(err);
  }
});

app.delete("/api/deleteLoans/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query("DELETE FROM msme_loan WHERE id = $1", [id],  (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Item deleted successfully!" });
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

