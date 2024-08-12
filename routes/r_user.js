const express = require('express');
const router = express.Router();
const { authenticate, superAdminAndAdmin, superAdminOnly } = require('../middleware/authMiddleware');

const {
    post_user,
    put_user,
    delete_user,
    get_detail_user,
    get_all_user,
    get_uniqe_user,
    get_count_user,
} = require('../controllers/c_user');

// Routes for user management
router.post('/user', authenticate, superAdminAndAdmin, post_user); // Only Admin and Super Admin
router.put('/user/:user_uuid', authenticate, superAdminAndAdmin, put_user); // Only Admin and Super Admin
router.delete('/user/:user_uuid', authenticate, superAdminOnly, delete_user); // Only Super Admin
router.get('/user/:user_uuid', authenticate, superAdminAndAdmin, get_detail_user); // Only Admin and Super Admin
router.get('/user', authenticate, superAdminAndAdmin, get_all_user); // Only Admin and Super Admin
router.get('/user/unique', authenticate, superAdminAndAdmin, get_uniqe_user); // Only Admin and Super Admin
router.get('/user/count', authenticate, superAdminAndAdmin, get_count_user); // Only Admin and Super Admin

module.exports = router;
