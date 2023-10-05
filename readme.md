This is a personal portfolio site which aim to showcase who I am and why am I doing what I am doing!

The purpose of this site is to dynamically direct the user to the different section of the page (Home, About Me, Skills, Projects, Contact Me) without having to reload the whole page. Immediately Invoked Function Expression (IIFE) is used to prevent the global scope of the functions. 
Firstly the windows load the Start function which has the shared header and footer for the page. in the header file, there are links to different pages of the sites which is inserted in the landing page(index) dynamically. and the footer contains the copyright information.
Load Content function loads the nav pages dynamically, without having to reload header and footer. It also directs user to about me and contact me when clicked in the body of main page. Each time the Load content directs the user to other nav links it dynamically stacks the history of the previous page. 
I have used bootstrap as well as hand written css for styling the page.

Github: https://github.com/AryanB01/Adv_Js-S3-_Assignment_2