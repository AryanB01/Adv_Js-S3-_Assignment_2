(function () {
  // for loading header
  let LoadHeader = () => {
    $.get("./views/shared/header.html", (htmlData) => {
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
    $.get("./views/shared/footer.html", (htmlData) => {
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
  };

  let Start = () => {
    // setting the landing page to home.html
    if ((document.title = "Portfolio")) {
      $.get(`./views/home.html`, (htmlData) => {
        $("main").html(htmlData);
        // adding home to top of history
        history.pushState({}, "", `/${document.title}`);
      });
    }

    LoadHeader();
    LoadFooter();
  };
  // let button = document.querySelector(".btn");
  
  // buttonClicked = () => {
  //   $.get(`./views/aboutme.html`, (htmlData) => {
  //     $("main").html(htmlData);
  //     history.pushState({}, "", `/${document.title}`);
  //   });
  // };
  // button.addEventListener('click', buttonClicked())

  window.addEventListener("load", Start);
})();

// buttonClick = () => {
//   LoadContent();
//   window.location.href = "./views/aboutme.html";
// };
// let button = document.querySelector(".btn");
// button.addEventListener("click", buttonClick);

// let displayContent = () => {};
