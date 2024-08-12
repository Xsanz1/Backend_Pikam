const express = require('express');
const router = express.Router();
const {authenticate, superAdminAndAdmin, superAdminOnly} = require('../middleware/authMiddleware');

const {
    post_module,
    put_module,
    delete_module,
    get_detail_module,
    get_all_module,
    get_unique_module,
    get_count_module,
} = require('../controllers/c_modules');

// Routes for module management
router.post('/module', authenticate, superAdminAndAdmin, post_module);
router.put('/module/:module_uuid', authenticate, superAdminAndAdmin, superAdminOnly, put_module);
router.delete('/module/:module_uuid', authenticate, superAdminAndAdmin, superAdminOnly, delete_module);
router.get('/module/:module_uuid', authenticate, superAdminAndAdmin, superAdminOnly, get_detail_module);
router.get('/module', authenticate, superAdminAndAdmin, superAdminOnly, get_all_module);
router.get('/module/unique', authenticate, superAdminAndAdmin, superAdminOnly, get_unique_module);
router.get('/module/count', authenticate, superAdminAndAdmin, superAdminOnly, get_count_module);

module.exports = router;
