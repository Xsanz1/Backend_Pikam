const express = require('express');
const router = express.Router();
const {authenticate, superAdminAndAdmin, superAdminOnly}  = require('../middleware/authMiddleware');

const {
    post_access,
    put_access,
    delete_access,
    get_all_access,
    get_detail_access,
    get_unique_access,
    get_count_access,
} = require('../controllers/c_access')

// Routes for access management
router.post('/access', authenticate, superAdminAndAdmin,  post_access);
router.put('/access/:access_uuid', authenticate, superAdminAndAdmin, superAdminOnly,  put_access);
router.delete('/access/:access_uuid', authenticate, superAdminAndAdmin, superAdminOnly,  delete_access);
router.get('/access', authenticate, superAdminAndAdmin, get_all_access);
router.get('/access/:access_uuid', authenticate, superAdminAndAdmin, superAdminOnly,  get_detail_access);
router.get('/access/unique', authenticate, superAdminAndAdmin, superAdminOnly,  get_unique_access);
router.get('/access/count', authenticate, superAdminAndAdmin, superAdminOnly,  get_count_access);
module.exports = router;
