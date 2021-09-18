# M2 Project Tasty TV

1. Build an SPA for TastyTV in accordance with [client specification.](https://docs.google.com/document/d/1-GVAPklgZZkyeYGi1Y0W6LQszZEmD7P5GxO8g3V79uk/edit#heading=h.1y4lrf4t1nl3)

2. Process user stories and top-level component and wireframe layout. The current design draft is available [here.](https://miro.com/app/board/o9J_lxclt7o=/)

## Work Progress: 16/09/2021

3. Main components drafted and added with draft parent/child hierarchy and state flow implementation.

4. API calls added to RecommendedList.jsx component and called on component useEffect (did mount).

5. Ability to change the state of the WatchList.jsx component to add movies to watch from the RecommendedList.jsx component. The movie item has been programmed to be filtered from the RecommendedList.jsx component once added to WatchList state.

6. Most WatchCard.jsx elements added. There is still space for allowing users to edit each item and scheduled to be added for the next commit.

## Work Progress: 17/09/2021

7. All formal components and code created to meet all minimum specification deliverables. This includes the user requirement to edit each item. This has been achieved by allowing the user to comment/review each movie in their Watch List.

8. All states are appropriately updated and maintained while the page is in use.

9. Error handling and style implemented. Each component has a corresponding stylesheet.

10. API call repeated to poplulate RecommendedList.jsx component to a suitable fill. This allows the user to see more movie recommendations on page load up and "Spin for More" button press.

11. File structure organisation completed and directories approiately labelled.

12. Optional stretch goals to be considered, pending available time prior to project submission.

## Work Progress: 18/09/2021

13. Following a 1:1 with the Educator it was determined that the edit item deliverable would not be fully met. To counter this it was determined that a number of items should be implemented to give feedback to the user for editing and item and reviewing a movie. This has lead to the creation of a number of buttons that allow the user to post and edt their review, as well as the creation of review components that save the state of the user's posted review.

14. The review and edit code was implemented and now the corresponding component stylesheets are all that is required to finish the review components.

## Final Project Submission:

1. Project is ready for final submission.

2. Coming soon....This will involve server deployment and completion of this README to cover the scope of the project README requirements.

### SPA Overview:

#### Recommended List and Card Components

1. On initialisation the user is presented with the home screen, where the recommendation movie list component is displayed on load up. The recommended movie list state is contained and updated within the recommended movie list component.

2. Axios was used to get the API response from the movie data API provided in the specification. The API populates the recommended movie list component where the state is updated.

3. Within the recommended movie list component is the individual movie card child component which renders each movie suggestion returned from the API onto individual movie cards.

4. Users will be able to add a movie to their watch list by clicking on the Add button displayed under each movie recommendation. This will update the recommended list state by filtering the movie that was just added to the watch list. This helps avoid the possibility of adding the same movie more than once to the watch list; however it is uncertain whether the API could return the same movie on future calls and then be added to the watch list again by the user. This is possibly an unsolved problem to think about in future iterations.

#### Watch List and Card Components

1. From adding a movie to the watch list the movie details are passed up to the parent container through props where the watch list state is updated with the movie details.
