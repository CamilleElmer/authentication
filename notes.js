User Authentication = user password
Authentication = site verifies that you ahve access to the page based off your login credentials. already gained access to site what features do they get?
Basic authentication - login as login credentials. server queries and saved credentials.

stateless vs. stateful protocal
cookie based (passport) vs taken based (API and OF/omni authentication)

Express sessions cooporate well with passport.

Cookie based (look up in slides)
-stateful
-session is kept both on server and client side
-active sesstion

Examples
-user submits login credentials
-server verifies the credentials
-server creates a session with an ....

taken based- (look online)
-stateless

The slide show for user authenitication in node.js is here and I will need to be able to reference it.

Passports npm (online) is relatively good tool to use as a referencecd.

First you make a server (index.js)

Front-end: HTML, CSS, JavaScript
Back-end:  index.js
	endpoints for users and endpoints for images... for both you want a controller and a model.

To merge files in teams create branches
----> structure- who is goign to be working on what
----> wireframes- on what you think will look good.
----> next class think about coding in Github.



	2Chris-------->push-------->merge to master
			
1---------------------------------------------------------------> Center Master

					4-----------------------------> This is when this file is pushed into the center master

			3-----------local files that then pull Chris's master file

	Maegan-------->push-------->merge to master

At this point post to github

gitcheckout -b CamillesBranch
gitcheckout -b master
git pull origin mastergit checkou bramchname
git status
git ad .
git commit - m "message"
git checkout master
git push origin CamillesBranch
git branch -D CamilleBranch
git pull origin master   
git push origin Camille
git chackout master
git pull origin master