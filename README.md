
PAGINATION

This repo has the code for reusable pagination component with sample dyanamic utilization. To utilize this pagination, you can include the pagination component code in your project. Then to include the component on any of your pages/iterables, import and utilize it as follows:

Pagination paginationData={cardsData} paginateAction={this.updatePageContent} cardsPerPage={5} 

where the props are as follows:
* paginationData expects an array of object. Eg. cardsData here is an array of objects which are to be iterated.
* paginateAction has a reference to a function on this page where we can update the state for the cards to be iterated. paginateAction function is called from Pagination component with the updated value of data to be iterated for that page as the parameter.
* cardsPerPage prop expects a number which indicates how many cards/objects we want to see per page

Steps to run the project:

1. git clone https://github.com/AnupriyaSaxena/ice-fire.git
2. npm start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


