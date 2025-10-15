const express = require('express');
const ctrl = require('../controllers/contacts.controller');

const router = express.Router();

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);
router.delete('/', ctrl.removeAll);

module.exports = router;
