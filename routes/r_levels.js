const express = require('express');
const router = express.Router();
const {authenticate, superAdminAndAdmin, superAdminOnly} = require('../middleware/authMiddleware');

const {
    post_levels,
    put_levels,
    delete_levels,
    get_detail_level,
    get_all_levels,
    get_unique_levels,
    get_count_levels,
} = require('../controllers/c_levels');

// Routes for level management
router.post('/level', authenticate, superAdminAndAdmin, superAdminOnly, post_levels);
router.put('/level/:level_uuid', authenticate, superAdminAndAdmin, superAdminOnly, put_levels);
router.delete('/level/:level_uuid', authenticate, superAdminAndAdmin, superAdminOnly, delete_levels);
router.get('/level/:level_uuid', authenticate, superAdminAndAdmin, superAdminOnly, get_detail_level);
router.get('/level', get_all_levels);
router.get('/level/unique', authenticate, superAdminAndAdmin, superAdminOnly, get_unique_levels);
router.get('/level/count', authenticate, superAdminAndAdmin, superAdminOnly, get_count_levels);

module.exports = router;
