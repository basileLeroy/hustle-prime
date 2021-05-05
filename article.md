### Intro    
> Struggling to use `Google Analytics` on a React-app?
> Do you only get data on the landing page of your app, instead of every page?     
>       
> This article will be about how to fix this problem!    
     

### The issue:     
Google Analytics (GA) sends a pageview per page load, this means that if you would go on a certain page on your website, it requests that page from the server and loads it for the user. That is what GA records and sends as data.    
(This is in the case of a simple page view, page-events will not be discussed here!)    
And this is also what is the issue when trying to use GA on a React-app (or any `single-page applications`). React will load the whole app at once and switch components directly on the browser side.     
GA doesn't see this as a new page-load as it doesn't actually load a new page, but as a reload of the same page.     


### A solution:     
There have been different kinds of solutions to this problem, but when I went looking for one I found it confusing on finding a clear and up-to-date solution. So here I am, sharing my own recommendation!     
> The idea would be that, as GA recognizes the page reload of the root URL (`yourwebsite.com/`path/to/page) but not the URI (That is the part after the root: yourwebsite<span></span>.com/`path/to/page`), the trick would be to make it check that URI everytime it reloads. And send that as the whole location of the page.    

This solution requires you to use those dependencies:     
* `react-router-dom` and `react-ga`
```
npm -i react-router-dom react-ga --save
or
yarn add react-router-dom react-ga --save
```

### STEP 1     
      

Create a file in your source folder and give it a name like `useGaTracker.js` or something, you can name it however you want though.      
       
This is the file we are going to use to write our function in.     
* Go get your UA tracking code on GA.     
If you already have created your GA property, you can find that code like this:       

### STEP 2     
      

* Import `{ useEffect, useState }` from `react`; `{ useLocation }`from `react-router-dom` and `ReactGA` from `react-ga`