# Hypermedia-project
Project of Hypermedia Applications course, Politecnico di Milano 2020-2021


• For each group member: a short description of his/her contribution. (to let us know who
did what)
• A technical documentation describing:
o Server and DB technologies used (just few lines)
o Components developed, their functionalities and structure o Plugins (if used) e.g., routing, store, ...
• Comments about how your usage of the framework was compliant to the best practices for the specific application domain of your website (discussed during the course).



Name Group: TopTech
Website: https://toptech-polimi.herokuapp.com/



Back-End
Server is run on Node.js and is defined through 2 javascript file:
* api.js: it represents the Server Middleware. In particular processes:
  * GET and POST request from the client side;
  * Query execution using ORM object;
* db-conn.js: it contains code of our Postgres Database handled by Sequelize framework. It contains:
  * Database definition;
  * Method relevant to tuples insertion (Run only once. Now the code has been commented);





Member n. | First Name | Second Name| Matricola | Code Person | Email address
--------- |--------- |--------- |--------- |--------- |--------- |
1| Matteo | Bresciani| 944639 | 10527150 | matteo.bresciani@mail.polimi.it
2| Gabriele | D'Ascoli| 111111 | 11111111| gabrieleangelo.dascoli@mail.polimi.it

Front-end



Components:
* Breacumb.vue: used to provide group link during navigation on group of/ single topic. For instance, in the page of the single product it allows user to go to the page of the group of all products;
* Header.vue: It's a singleton component that, with Footer, belongs to the template of each webiste pages (default.vue). It allows user to move to the pages of group of topics (such as Products, Areas and People) and others (About Us ad Contact pages);  
* Footer.vue: It's a singleton component that, with Header, belongs to the template of each webiste pages (default.vue). It owns the same header's link, with the addition of each Area link and company's address;
* ItemArea.vue: It's a card that is used in the Areas page to give basic information of each area. It links to each area's page;
* ItemPerson.vue: It's a card that is used in the People page to give basic information of each person. It links to each employee's page;
* ItemProduct.vue: It's a card that is used in the Products page to give basic information of each product. It links to each product's page;



Contribution


Bresciani Matteo | D'Ascoli Gabriele
--------- |--------- 
areas/index.vue| people/index.vue
areas/_id.vue| AboutUs.vue
products/index.vue| Contact.vue
products/_id.vue|
people/index.vue|
people/_id.vue|
index.vue |


Back-end

Bresciani Matteo | D'Ascoli Gabriele
--------- |---------
* Communication between Client and Server (api.js + db-conn.js); * Database structure| Database contents (db-conn.js)



Components

Bresciani Matteo | D'Ascoli Gabriele
--------- |---------
Footer.vue | Breadcumb.vue
ItemArea.vue | Header.vue
ItemPerson.vue|
ItemProduct.vue|


Tool Used
* WebStorm;
* pgAdmin4;
* Bootstrap

Platform 
* Heroku;





