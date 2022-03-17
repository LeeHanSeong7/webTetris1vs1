const router = require('express').Router();
router.use(function(req,res,next){next();});
[
    require('./signUp')
].forEach((apply)=>{apply(router);});
require('./Ingame/router')(router,'/ingame');
require('./Lobby/router')(router,'/lobby');
{
    const path = require('path');
    const CONFIG = require('../../config');
    const VIEW = path.join(CONFIG.viewPath,'login.ejs');
    router.get('/',function(req,res){
        res.render(VIEW);
    });
    router.get('/script', function(req,res){
    });
}
module.exports = (app,name)=>{
    app.use(name,router);
}