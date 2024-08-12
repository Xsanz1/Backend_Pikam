const express = require('express');
const router = express.Router();
const  { authenticate } = require('../middleware/authMiddleware');

const {
    post_transaction,
    put_transaction,
    delete_transaction,
    get_transactions_user,
    get_all_transaction,
    get_detail_transaction,
    get_uniqe_transaction,
    get_count_transaction,
    get_transaction_bytransaction_code,
} = require('../controllers/c_transaction')

// Routes for transaction management
router.get('/transaction/:transaction_code', authenticate, get_transaction_bytransaction_code);
router.get('/transaction/detail/:transaction_uuid',authenticate, get_detail_transaction);
router.post('/transaction',authenticate, post_transaction);
router.put('/transaction/:transaction_uuid',authenticate, put_transaction);
router.delete('/transaction/:transaction_uuid',authenticate, delete_transaction);
router.get('/transactions', authenticate, get_transactions_user)
router.get('/transaction',authenticate, get_all_transaction);
router.get('/transaction/unique',authenticate, get_uniqe_transaction);
router.get('/transaction/count',authenticate, get_count_transaction);


module.exports = router;
