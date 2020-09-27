/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


const navigationContainer = document.getElementById('navbar__list');
const sectionsList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the navigation
const navBuilder = () => {

    let navigationHTML = '';
    sectionsList.forEach(section => {
		
        const sectionID = section.id;
        const sectionTitle = section.dataset.nav;
        navigationHTML += `<li><a class="menu__link" href="#${sectionID}" data-section-id="${sectionID}">${sectionTitle}</a></li>`;

    });
	
    navigationContainer.innerHTML = navigationHTML;


};

navBuilder();

// Active css
const isInViewport = (elem) => {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
	

const addActiveClass = () => {
	sectionsList.forEach(section => {
		
		if (isInViewport(section)) {
		  section.classList.add('your-active-class');
		} else {
		  section.classList.remove('your-active-class');
		}
    });
}

window.addEventListener('scroll', function (event) {
	addActiveClass();
}, false);


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Jump to section on link click

const jumpToSection = () => {

    const anchors = document.querySelectorAll('.navbar__menu a');
    anchors.forEach(anchor => {
		
		
		// Triggers the jump section
        anchor.addEventListener('click', (event) => {
			event.preventDefault();
			const sectionID = anchor.getAttribute('data-section-id');
			const relatedSection = document.getElementById(sectionID);
			relatedSection.scrollIntoView({behavior: "smooth"});
        });
    });

};

jumpToSection();

// Set sections as active


