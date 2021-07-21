# Hypermedia-project
Project of Hypermedia Applications course, Politecnico di Milano 2020-2021<br>

Name Group: **TopTech** <br>
Website: https://toptech-polimi.herokuapp.com/

Member n. | First Name | Second Name| Matricola | Code Person | Email address
--------- |--------- |--------- |--------- |--------- |--------- |
1| Matteo | Bresciani| 944639 | 10527150 | matteo.bresciani@mail.polimi.it
2| Gabriele | D'Ascoli| 944275 | 10693397| gabrieleangelo.dascoli@mail.polimi.it
## Framework and tool used

* The Vue framework is based on **Nuxt**. We adopted it because is one of the most developer-friendly solution. For instance, routing is generated automatically starting from the .vue components.
* We choose **Server Side Rendering** in order to:
  * have pages immediately available to users, even on slow Internet connections;
  * give users an high *First Contentful Paint* and *SEO*;
  





## Back-End
Server is run on **Node.js** and is defined through 2 javascript file:
* **api.js**: it represents the *Server Middleware*. In particular processes:
  * *GET and POST request* from the client side;
  * *Query execution* using ORM object;
* **db-conn.js**: it contains code of our *Postgres Database* handled by *Sequelize framework*. It contains:
  * *Database definition*;
  * Method relevant to *tuples insertion* (Run only once. Now the code has been commented);
  
## Front-End
 For the front-end, most of the HTML elements are customized by **Bootstrap classes**. In this way we could:
  * improve efficiency in terms of time spent;
  * avoid cross-browser bugs;

### Components used
* [*Breadcumb.vue*](components/Breadcumb.vue): used to provide group link during navigation on group of/ single topic. For instance, in the page of the single product it allows user to go to the page of the group of all products;
* [*Header.vue*](components/Header.vue): It's a singleton component that, with Footer, belongs to the template of each webiste pages (default.vue). It allows user to move to the pages of group of topics (such as Products, Areas and People) and others (About Us ad Contact pages);  
* [*Footer.vue*](components/Footer.vue): It's a singleton component that, with Header, belongs to the template of each webiste pages (default.vue). It owns the same header's link, with the addition of each Area link and company's address;
* [*ItemArea.vue*](components/ItemArea.vue): It's a card that is used in the Areas page to give basic information of each area. It links to each area's page;
* [*ItemPerson.vue*](components/ItemPerson.vue): It's a card that is used in the People page to give basic information of each person. It links to each employee's page;
* [*ItemProduct.vue*](components/ItemProduct.vue): It's a card that is used in the Products page to give basic information of each product. It links to each product's page;


### Front-End contribution

Bresciani Matteo | D'Ascoli Gabriele
--------- |--------- 
[*areas/index.vue*](pages/areas/index.vue)| [*people/index.vue*](pages/people/index.vue)
[*areas/_id.vue*](pages/areas/_id.vue)| [*AboutUs.vue*](pages/AboutUs.vue)
[*products/index.vue*](pages/products/index.vue)| [*Contact.vue*](pages/Contact.vue)
[*products/_id.vue*](pages/products/_id.vue)|
[*people/index.vue*](pages/people/index.vue)|
[*people/_id.vue*](pages/people/_id.vue)|
[*index.vue*](pages/index.vue) |


### Back-end contribution

Bresciani Matteo | D'Ascoli Gabriele
--------- |---------
Communication between Client and Server (api.js + db-conn.js);   | Database contents (db-conn.js)
Database structure |



### Components contribution

Bresciani Matteo | D'Ascoli Gabriele
--------- |---------
[*Footer.vue*](components/Footer.vue) | [*Breadcumb.vue*](components/Breadcumb.vue)
[*ItemArea.vue*](components/ItemArea.vue) | [*Header.vue*](components/Header.vue)
[*ItemPerson.vue*](components/ItemPerson.vue) |
[*ItemProduct.vue*](components/ItemProduct.vue) |

