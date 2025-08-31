import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "https://jainbhavya359.github.io", "https://solicio.netlify.app", "http://localhost:8888"],
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));
app.use(express.json());

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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

app.post("/api/stock", async (req, res) => {
  const {email, productName, purchaseQuantity, purchasePrice, date} = req.body;
  try{
    const response = await db.query("INSERT INTO msme_stock(email, product_name, quantity, price, date) VALUES($1, $2, $3, $4, $5)"
      ,[email, productName, purchaseQuantity, purchasePrice, date]);
    res.status(200).json({ message: 'Data saved successfully' });
  }catch (err){
    console.log("error", err);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.get("/api/getstock", async (req, res) => {
  try{
    const data = await db.query("SELECT * FROM msme_stock");
    res.json(data.rows);
  }catch(err){
    console.log(err);
  }
});

app.post("/api/licenses", async (req, res)=> {
  const {licName, authority, date, email} = req.body;

  try{
    const res = await db.query("INSERT INTO msme_licenses(licName, authority, date, email) VALUES($1, $2, $3, $4)", [licName, authority, date, email]);
    res.status(200).json({message: 'Data saved successfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Failed to save data'});
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

