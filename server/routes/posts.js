const router = require('express').Router();
const ctrl = require('../controllers/postController');
const auth = require('../middleware/auth');
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', auth, ctrl.create);
router.put('/:id', auth, ctrl.update);
router.delete('/:id', auth, ctrl.remove);
module.exports = router;
