# Booxploration - front end

[**Deployed APP**](https://booxploration.herokuapp.com/)

[**Link to Backend Repo**](https://github.com/lind1125/Project_4_backend)


---

### Technologies used:

* React
* Bootstrap
* react-router-dom
* react-validation
* axios
* [Open Library API](https://openlibrary.org/developers/api)

---

### Installation instructions:

* Fork and clone repo
* run `npm install` in the command line
* setup back end
* `npm start`

---
### General Approach

The idea behind the app is to encourage dicovery of new books based on subjects of interest. The landing page consists only of a search query input which queries the Open Library [Subjects API](https://openlibrary.org/dev/docs/api/subjects), which then returns a list of results, which are rendered on the same page. Each query result links to a component which pulls details from the API on that particular book. From here, the user can add the book to their own personal list, which creates a new entry in the faved books table on the back end database.

The user profile component lists user information as well as any books associated with that user on the back end database. From there, the user can delete a book (clear from the database) as well as mark it as read (update the has_read boolean for that entry in the database).


---

###  Wireframes


### User stories


---
### Major Hurdles



### Acknowledgements

* Thank you to the GA team giving me the tools to explore this language/framework

* Big thanks to Room 5 for the frequent debugging help and the constant camaraderie
