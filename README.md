# A bootstrap walkthrough

##T.O.C.

###Part 0 - The Setup

###Part 1 --  Styles 
1.  The Grid Layout
2.  Buttons
3.  Forms
4.  Tables
5.  Type
  - Centering
  - Transforming to uppercase
  - `<address>` tag
  - `<blockquote>`

###Part 3 -  Components
1. NavBar
2. Jumbotron
3. Thumbnails
4. Panels
5. Dropdown
6. Responsive Embed

<hr>

####Part 0 - The Setup
1. Install your setup script
  - fix matt's build 
  ```javascript
    "scripts" {
            ...
           "start": "npm run n & node heroku-server.js",
           ...
     }
  ```

2. In the command-line install bootstrap thru bower: `bower install bootstrap`
3. in you css file on line-1: `@import "../bower_components/bootstrap/dist/css/bootstrap.min.css";`
4. In your index.html, we will test to see if the bootstrap styles are  working: 
```html
        <div class="wrapper">
            <h2>La condesa irina lazaar</h2>
            <button href="#" class='btn btn-primary'>Click here</a>
        </div>
```
  - **the font should change to helvetica and the button should be styled blue**



