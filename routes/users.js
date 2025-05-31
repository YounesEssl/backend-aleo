const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Connexion wallet et création d'utilisateur si nécessaire */
router.post('/connect-wallet', userController.connectWallet);

/* Mise à jour des informations utilisateur */
router.put('/:walletAddress', userController.updateUser);

module.exports = router;
