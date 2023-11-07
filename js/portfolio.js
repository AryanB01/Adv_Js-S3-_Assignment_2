(function () 
{

  		// for loading header
    let LoadHeader = () => {
            $.get(`./views/shared/header.html`, (htmlData) => {
                $("header").html(htmlData);
                //after navbar loaded attaching event handlers to each link
                $("li>a").on("click", (event) => {
                  // prevents default behaviour
                  event.preventDefault();

                  // set the page title to the id attribute of the selected a element
                  document.title = $(event.currentTarget).prop("id");
                  LoadContent();
                });
                //})
              });
            };

        // for loading footer
    let LoadFooter = () => {
			$.get(`./views/shared/footer.html`, (htmlData) => {
				$("footer").html(htmlData);
				});
			};
        //-----------------//

        //   for main content
    let LoadContent = () => {
			let activePage = document.title;
			$.get(`./views/${activePage}.html`, (htmlData) => {
				$("main").html(htmlData);
				// adding current page to top of history
				history.pushState({}, "", `/${document.title}`);
			});

			LoadHome();
			

			if(activePage = "Portfolio"){
				$(document).on("click", ".contactMe", (event) =>{
					event.preventDefault();
					
					$.get(`./views/contactme.html`, (activeLink) =>{
						$("main").html(activeLink);
						document.title= "Contact";
						history.pushState({},"",`/${document.title}`);
					});
				});
			};
		
			if(activePage = "Portfolio"){
				$(document).on("click",".btnAboutme", (event) =>{
					event.preventDefault();

					$.get(`./views/aboutme.html`,(Aboutmelink) =>{
						$("main").html(Aboutmelink);
						document.title= "AboutMe";
						history.pushState({},"", `/${document.title}`);
					});
				});
			};

			//form submission
			// redirecting user to aboutme page when the contace form is submitted

			$(document).on("submit", "#formContact", function () {
				event.preventDefault();
				$.get(`./views/aboutme.html`, (htmlData) => {
					$("main").html(htmlData);
					history.pushState({}, "", `${document.title}`);
				});
			});
	
		};
        

	let LoadHome = () =>{
		$.get(`./views/home.html`, (htmlData) => {
			$("main").html(htmlData);
			history.pushState({}, "", "/");
		});	
	};
	let LoadAbout = () => {
		$.get(`./views/aboutme.html`, (htmlData) => {
		  $("main").html(htmlData);
		  });
	};
	
	let LoadContact = () => {
		$.get(`./views/contactme.html`, (htmlData) => {
		  $("main").html(htmlData);
		  });
	};
	  
	let LoadProjects = () => {
	  $.get(`./views/projects.html`, (htmlData) => {
		$("main").html(htmlData);
		});
	};

	let LoadSkills = () =>{
	  $.get(`./views/skills.html`, (htmlData)=>{
		$("main").html(htmlData);
		});
	};

	 

    let Start = () => {

          LoadHeader();
          LoadFooter();
          LoadContent();
        };
        
        window.addEventListener("load", Start);
	
})();
