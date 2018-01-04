var express = require('express');
var router = express.Router();

import * as Proxy from '../common/proxy';

/**
 * 资产列表
 */
router.get('/', function (req, res, next) {
    //   res.render('index', { title: 'Express' });

    let url = '';
    // 根据默认条件，查询资产数据
    Proxy.get(url)
        .then((res) => {
            // 处理数据
        })
        .then((res)=>{
            // 页面渲染
        })
        .catch((err) => {

        });
});

/**
 * 查询资产数据
 */
router.post('', (req, res, next) => {

});

module.exports = router;