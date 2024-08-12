const express = require('express');
const router = express.Router();
const {authenticate, superAdminAndAdmin, superAdminOnly} = require('../middleware/authMiddleware');

const {
    post_menu,
    put_menu,
    delete_menu,
    get_detail_menu,
    get_all_menu,
    get_uniqe_menu,
    get_count_menu,
} = require('../controllers/c_menu');

// Routes for menu management
router.post('/menu',authenticate, post_menu);
router.put('/menu/:menu_uuid', authenticate, put_menu);
router.delete('/menu/:menu_uuid', authenticate, delete_menu);
router.get('/menu/:menu_uuid', get_detail_menu);
router.get('/menu', get_all_menu);
router.get('/menu/unique', get_uniqe_menu);
router.get('/menu/count', get_count_menu);

module.exports = router;
