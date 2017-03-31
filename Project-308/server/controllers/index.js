// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Home',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Displays the Contact Page
module.exports.DisplayContact = (req, res) => {
  res.render('content/contact', {
    title: 'Contact',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
