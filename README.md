# Just For Learning Purpose
Resource Followed: https://youtu.be/LOeioOKUKI8

# Workflow
1. npm i -g firebase-tools
2. firebase init hosting
3. firebase init functions
       a. Javascript
       b. Install Dependecies with npm? Yes
4. cd .\functions\     
5. npm install express -save
6. cd ..

7. Set up the function
8. Hook up it with your firebase hosting project
       a. Edit firebase.json (rewrites)
9. firebase serve --only functions,hosting (Local Emulation)
10. Go to localhost:5000/urlThatYouSetUp
11. firebase deploy

12. cd .\functions\
13. npm install handlebars consolidate --save
14. Create folder 'views'
15. Add file 'index.hbs'
16. Edit index.hbs
17. Edit index.js
18. Add some style.css 
19. Delete index.html from public folder. Because firebase automatically serves static files by default over dynamic ones.
20. firebase deploy
