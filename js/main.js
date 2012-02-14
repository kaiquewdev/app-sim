// Default script

var showItem = function ( element, duration ) {
	$(element).fadeTo(0, 0);

	setTimeout( function () {
		$( element ).fadeTo( duration, 1);
	}, duration);
};

$(function () {
	var element = {
		title: '.main-content article header div h2',
		sep: '.main-content article header div hr',
		menu: '.inner-left-menu nav',
		innerRightContent: '.inner-right-content',
		bubble: 'div.bubble',
		footer: '.main-content article footer'
	};
	
	// Show Title
	showItem( element.title, 1000 );
	// Show Title
	showItem( element.sep, 1000 );
	// Show menu
	showItem( element.menu, 1500 );
	// Show box of content
	showItem( element.innerRightContent, 1800 );
	// Show bubble
	showItem( element.bubble, 2800 );
	// Show footer
	showItem( element.footer, 2200 );

	$(element.title, 'h3', 'h4', 'p').lettering('words');
});