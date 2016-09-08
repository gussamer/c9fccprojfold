#c9fccprojfold

The script setuppj is a bash script I pieced together based on the instructions
for setting up a web application for projects in the free Code Camp Back End
Development Certification, located here: 

https://www.freecodecamp.com/challenges/get-set-for-our-api-development-projects

Place the files setuppj, tempserv.js and LICENSE.md in the desired folder 
to setup you various project folders within. Once there run the setuppj command:

setuppj [Github User Name] [Project Name] [Project Description]

A folder will be created named using the Project Name parameter and the script 
will be cd into. Then a .gitignore is generated containing node_modules to 
ignore express js installed later. Next a README.md is generated containing the 
Project Name and Project Description parameters. Then the LICENSE.md template 
file from the parent project folder is copied into the new project folder, it's
the MIT license the name just needs to be replaced or the contents of the file 
can be replaced with another license. Then the tempserv.js template express 
server.js copied into the project folder as server.js. Next you'll need to enter
suitable project information when prompted by npm init, although not yet created
the git repository url can be entered in the format:

https://github.com/[Github User Name]/[Project Name].git

A global node js install is required for the writenode.js script to execute 
and add node as an engine to the package.json created by the npm init. Then 
express js is installed and saved as a dependency in package.json. A github 
repository named after the Project Name is created remotely which will require 
the account password. The the local git repository is initiated and a Heroku app
is created with the Project Name, this requires the Heroku CLI installed and 
logged in. The Heroku app git repository is then added as a remote as well as 
the previously created Github repository. Then a git add, commit and push of the
master to both remotes is peformed and once complete a wget is perfomed on the 
newly created Heroku app url and is printed to the terminal.