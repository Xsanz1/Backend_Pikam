const express = require('express');
const router = express.Router();
const {authenticate, superAdminAndAdmin, superAdminOnly} = require('../middleware/authMiddleware');

const {
    post_announcement,
    put_announcement,
    delete_announcement,
    get_all_announcement,
    get_detail_announcement,
    get_uniqe_announcement,
    get_count_announcement,
} = require('../controllers/c_announcement')

// Routes for announcement management
router.post('/announcement', authenticate, superAdminAndAdmin, superAdminOnly, post_announcement);
router.put('/announcement/:announcement_uuid', authenticate, superAdminAndAdmin, superAdminOnly, put_announcement);
router.delete('/announcement/:announcement_uuid', authenticate, superAdminAndAdmin, superAdminOnly, delete_announcement);
router.get('/announcement', authenticate, superAdminAndAdmin, superAdminOnly, get_all_announcement);
router.get('/announcement/:announcement_uuid', authenticate, superAdminAndAdmin, superAdminOnly, get_detail_announcement);
router.get('/announcement/unique', authenticate, superAdminAndAdmin, superAdminOnly, get_uniqe_announcement);
router.get('/announcement/count', authenticate, superAdminAndAdmin, superAdminOnly, get_count_announcement);

module.exports = router;
