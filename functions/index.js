
const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.guardarSuscripcion = functions.https.onRequest(async (req, res) => {
  const { nombre, email } = req.body;

  try {
    const response = await fetch("https://api.sheetbest.com/sheets/d4af52f1-df80-456b-a535-c5193ef78f93", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al guardar suscripción:", error);
    res.status(500).json({ error: "Error al guardar suscripción" });
  }
});
