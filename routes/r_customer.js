const express = require('express');
const router = express.Router();
const { authToken, authenticate} = require('../middleware/authMiddleware');

const {
    post_customer,
    put_customer,
    delete_customer,
    get_detail_customer,
    get_all_customer,
    get_uniqe_customer,
    get_count_customer,
} = require('../controllers/c_customer');

// Routes for customer management
router.post('/customer', post_customer);
router.delete('/customer/:customer_uuid',  delete_customer);
router.get('/customer',  get_all_customer);
router.get('/customer/unique',  get_uniqe_customer);
router.get('/customer/count',  get_count_customer);
router.put('/customers', authenticate, put_customer);
router.get('/customer/detail', authenticate, get_detail_customer);

module.exports = router;
