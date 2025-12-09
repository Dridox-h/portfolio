const express = require('express');
const multer = require('multer'); // Middleware pour la gestion des fichiers multipart/form-data
const path = require('path');
const app = express();
const PORT = 5000;

// Configure multer pour stocker les fichiers en mémoire
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint pour gérer le téléchargement des fichiers
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  
  if (!file) {
    return res.status(400).json({ error: 'Aucun fichier téléchargé.' });
  }

  // Simulation de l'upload vers un stockage externe
  const downloadUrl = `http://localhost:${PORT}/uploads/${file.originalname}`;

  // Pour cet exemple, renvoyez simplement l'URL du fichier
  res.status(200).json({ url: downloadUrl });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
