/* import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */






var page = require("webpage").create(); 

var system = require("system");

page.open("http://localhost:3000", function(status) { 
  console.log(status);
   

    var title = page.evaluate(function(){
      return document.title;
    });
    console.log(title);
    
    phantom.exit();   
   });
   
  
    



      /* page.evaluate(function(){
      //document.getElementById("zc").value="James";
      $("#chn").val("Joe");
      console.log('Entered Card Holder Name');
    });*/ 

    //wpage.open("https://www.google.com/")

  //// wpage.uploadFile('input[name = fileToUpload]', 'output.png'); 
  //// wpage.render("sform.png");  
   
  // var element = wpage.evaluate(function() {   
//return document.querySelector('input[type = "submit"]');   
      // getting details of submit button using queryselector. 


