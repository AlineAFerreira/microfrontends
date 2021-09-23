/*So what does this indexed JS file all about and why do we add it in?
This really gives webpack the opportunity to realize that before executing that bootstrapped JS file we have to go and fetch some code from the products project. */

/*It is just to allow Webpack that opportunity to go and get some additional JavaScript and make sure that we've got the project code or the products code ready along with the code ready as well*/
import('./bootstrap.js');

