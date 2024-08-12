const express = require('express');
const router = express.Router();
const {authenticate, superAdminAndAdmin, superAdminOnly} = require('../middleware/authMiddleware');

const {
    post_permissions,
    put_permissions,
    delete_permissions,
    get_detail_permissions,
    get_all_permissions,
    get_unique_permissions,
    get_count_permissions,
} = require('../controllers/c_permissions');

// Routes for permissions management
router.post('/permissions', authenticate, superAdminAndAdmin, superAdminOnly, post_permissions);
router.put('/permissions/:permission_uuid', authenticate, superAdminAndAdmin, superAdminOnly, put_permissions);
router.delete('/permissions/:permission_uuid', authenticate, superAdminAndAdmin, superAdminOnly, delete_permissions);
router.get('/permissions/:permission_uuid', authenticate, superAdminAndAdmin, superAdminOnly, get_detail_permissions);
router.get('/permissions', authenticate, superAdminAndAdmin, superAdminOnly, get_all_permissions);
router.get('/permissions/unique', authenticate, superAdminAndAdmin, superAdminOnly, get_unique_permissions);
router.get('/permissions/count', authenticate, superAdminAndAdmin, superAdminOnly, get_count_permissions);

module.exports = router;
