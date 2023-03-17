# wok.js                                   
              
Minimalist framework instead of Angular,React,Vue,Solid,Svelte,Lit

npm install -g wokjs

navigate to a folder of your choice
type    wokproj                  into your terminal to create a wokjs project
type    npm run wok itsname      to create a new wok
type    npm run fry              to start your wokjs application live


# TODO
- rebuild the comonent on save, so we don't have to 'npm run wok' every time, we make a change
- find a way to shorten the command which creates a new wok, beacuse 'npm run add wokname' is too long 
- find a way to achieve highlighting in the css part of the wok, and override linting errors
- find a way to run the app from memory, and only build it when we want to deploy it, now we have a bulky html file, because 'npm run wok' builds the custom components into every html file
- rebuild when save happens in regural html files too (not only in woks)
