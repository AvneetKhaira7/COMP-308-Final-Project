// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Home',
    displayName: req.user ? req.user.displayName : ''
   });
}



// Displays the Contact Page
module.exports.DisplayDashboard = (req, res) => {
  res.render('content/dashboard', {
    title: 'Dashboard',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
