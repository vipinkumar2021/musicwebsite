var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  function(req, res, next) {
  var loginUserCustomer = localStorage.getItem('customerLoginUserName');
  var loginUserEmployee = localStorage.getItem('employeeLoginUserName');
  var loginUserAdmin = localStorage.getItem('adminLoginUserName');
  
  if(loginUserCustomer){
    res.redirect('/dashboardcustomer');
  } else if(loginUserEmployee) {
    res.redirect('/dashboardemployees');
  } else if(loginUserAdmin) {
    res.redirect('/dashboardadmin');
  } else {
    res.render('signout', { title: 'Front End Web Developer', msg:''});
  }  
});


router.post("/", function(req, res, next) {
  localStorage.removeItem('customerLoginTokenName');
  localStorage.removeItem('customerLoginUserName');
  localStorage.removeItem('employeeLoginTokenName');
  localStorage.removeItem('employeeLoginUserName');
  localStorage.removeItem('adminLoginTokenName');
  localStorage.removeItem('adminLoginUserName');
  //res.redirect('/');
  res.render('signout', { title: 'frontendwebdeveloper', msg:'' });
});


module.exports = router;
