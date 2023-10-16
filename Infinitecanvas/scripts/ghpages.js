const ghpages = require('gh-pages');

ghpages.publish(
	'docs',
	{
		repo: 'https://github.com/DheerajDV',
		message: 'published https://github.com/DheerajDV',
		user: {
			name: 'Dheeraj',
			email: 'dheerajdv123@gmail.com',
		},
	},
	function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log('published https://github.com/DheerajDV');
		}
	},
);
