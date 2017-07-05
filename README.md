Readme.txt
https://rama41222.blogspot.com


Installation
____________

prequisits:
1. MongoDB should be installed and runnig
2. Node should be installed
3. Java Should be installed
4. ESB should be configured

1. For each of the following services. Go inside the folder and run the command in the terminal
	npm install

	a. Sampath Gateway
	b. Dialog Gateway
	C. User Management Api

2. Then run the following command in the terminal
	node app.js

3. For each of the following services. Go to SPRING STS IDE and open each of the services. Then run the micro services 

	a. Movie Service
	b. Refreshment Service
	c. Restaurent Service

4. OPEN UP the ESB.
5. goto the ESB bin folder and execute
	sh wso2server.sh
6. Log in to the ESB console using 
	usernae: admin
	password : admin

7. Goto the ESB and import the switchcasemediator.xml file 

8. Goto the Angular client folder and first run the following commands in the terminal
	npm install
	bower install

9. To run the angular client use the following command
	grunt serve

10. Using the given postman collections, after importing to the postman, try running each of the test cases.

11. In the angular client, first create a new account using login
12. Then login using the created user
13. Go to the movies tab and search for a movie
14. Select a movie and fill in the nececcasrt order information
15. Then press checkout.
16. Inorder to check user's previous purchages. Goto profile tab to view a summery

