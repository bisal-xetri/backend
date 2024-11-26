import express from "express";
import connection from "../config/connection.js";
const router = express.Router();

// Add User
router.post("/add", (req, res) => {
  const { name, password, email } = req.query;

  if (!name || !password || !email) {
    return res.status(400).send("All fields are required");
  }

  const query = "INSERT INTO users (name, password, email) VALUES (?, ?, ?)";
  const values = [name, password, email];

  connection.query(query, values, (err, results, fields) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return res.status(500).send("Error adding user");
    }
    res.send("User added successfully");
  });
});

// Get User by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400).json({ success: false, message: "User ID not provided" });
  }

  const query = "SELECT * FROM users WHERE id = ?";
  connection.query(query, [id], (err, results, fields) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return res.status(500).send("Error retrieving user");
    }
    if (results.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(results[0]);
  });
});

// Update User
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, password, email } = req.body;

  if (!name || !password || !email) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const query = "UPDATE users SET name = ?, password = ?, email = ? WHERE id = ?";
  const values = [name, password, email, id];

  connection.query(query, values, (err, results, fields) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return res.status(500).send("Error updating user");
    }
    res.send("User updated successfully");
  });
});

// Delete User
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ success: false, message: "User ID not provided" });
  }

  const query = "DELETE FROM users WHERE id = ?";
  connection.query(query, [id], (err, results, fields) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return res.status(500).send("Error deleting user");
    }
    if (results.affectedRows === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({ success: true, message: "User deleted successfully" });
  });
});

export default router;
