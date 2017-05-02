### What we are building

* Base component will be ```ReactReviews```.
* Use React Router to create page views ```Home```, ```Review```, & ```Thanks```
* Page views have different children components depending on the page.

All page views share a ```Title``` functional component that simply takes ```this.props.title```  and displays it.

#### Home Component
Home component contains the following children:
1. ```AverageRating``` - container component <br />
data: ```this.props.totalReviews```, ```this.props.averageStars```
2. ```ReviewList``` - container component <br />
data: ```this.props.reviews``` which is an array of objects containing name and content properties.
3. Home also contains a Link to Review page which is not a component but bares mentioning.

#### Review Component
Review component contains a form for the user to submit their review. It is a controlled component where we take user inputs and use it to update our app state.

#### ThankYou Component
Thank you component is basic view to be rendered on successfully submitting a review. It should have an error state if review was not persisted correctly.
