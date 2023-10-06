(function () {
  // for loading header
  let LoadHeader = () => {
    $.get(`./views/shared/header.html`, (htmlData) => {
      $("header").html(htmlData);
      LoadContent(); // this is for loading home as I want home to show instead of index at first.

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

  //   for main content
  let LoadContent = () => {
    let activePage = document.title;
    $.get(`./views/${activePage}.html`, (htmlData) => {
      $("main").html(htmlData);
      // adding current page to top of history
      history.pushState({}, "", `/${document.title}`);
    });

    //$("#btnAboutme").on("click", (event) => { : this didn't work as i believe it was because of the home page dynamically getting added to the first index page.
    $(document).on("click", ".btnAboutme", (event) => {
      // console.log("test");
      event.preventDefault();
      $.get(`./views/aboutme.html`, (htmlData) => {
        $("main").html(htmlData);
        history.pushState({}, "", `/${document.title}`);
      });
    });

    $(document).on("click", ".contactMe", (event) => {
      event.preventDefault();
      $.get(`./views/contactme.html`, (htmlData) => {
        $("main").html(htmlData);
        history.pushState({}, "", `/${document.title}`);
      });
    });

    // redirecting user to aboutme page when the contace form is submitted
    $(document).on("submit", "#formContact", function () {
      event.preventDefault();
      $.get(`./views/aboutme.html`, (htmlData) => {
        $("main").html(htmlData);
        history.pushState({}, "", `${document.title}`);
      });
    });
  };

  let Start = () => {
    LoadHeader();
    LoadFooter();

    // setting the landing page to home
    let activePage = document.title;
    if (activePage == "Portfolio") {
      // console.log("test here");
      $.get(`./views/home.html`, (htmlData) => {
        $("main").html(htmlData);

        // adding home to top of history
        history.pushState({}, "", `/${document.title}`);
      });
    }
  };

  window.addEventListener("load", Start);
})();
