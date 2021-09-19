# M2 Project Tasty TV

## Available Website

1. The website can be previewed [here.]()

# Scope and Development Process

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

13. Following a 1:1 with the Educator it was determined that the edit item deliverable would not be fully met. To counter this it was determined that a number of items should be implemented to give feedback to the user for editing an item and reviewing a movie. This has lead to the creation of a number of buttons that allow the user to post and edt their review, as well as the creation of review components that save the state of the user's posted review.

14. The review and edit code was implemented and now the corresponding component stylesheets are all that is required to finish the review components.

## Work Progress: 19/09/2021

15. Stylesheet added for the review components and the review components now styled.

16. Review components tested and should now meet the deliverable requirement for a user to be able to edit an item.

# SPA Overview:

## Recommended List and Card Components

1. On initialisation the user is presented with the home screen, where the recommendation movie list component is displayed on load up. The recommended movie list state is contained and updated within the recommended movie list component.

2. Axios was used to get the API response from the movie data API provided in the specification. The API populates the recommended movie list component where the state is updated.

3. Within the recommended movie list component is the individual movie card child component which renders each movie suggestion returned from the API onto individual movie cards.

4. Users will be able to add a movie to their watch list by clicking on the Add button displayed under each movie recommendation. This will update the recommended list state by filtering the movie that was just added to the watch list. This helps avoid the possibility of adding the same movie more than once to the watch list; however it is uncertain whether the API could return the same movie on future calls and then be added to the watch list again by the user. This is possibly an unsolved problem to think about in future iterations.

## Watch List and Card Components

1. From adding a movie to the watch list the movie details are passed up to the parent container through props where the watch list state is updated with the movie details.

2. The user can then see the details of the movie they have just added to their watch list, including id, title, banner, and whether the movie has been watched or reviewed already; by default the movie would be unwatched and unreviewed on adding it to the watch list.

3. The watch list calls the individual watch card components to be rendered within the list where the user can see and process a number of actions:

   a. Mark a movie as watched/unwatched by clicking the checkbox. This will update the state of the movie list to watched or unwatched respectively.

   b. Write a review of the movie and post it to their reviews section. This will update the state of the review and update the state of posted reviews while the user types in the review box and when clicking post respectively. On posting, the textarea will be greyed out and the button will change from "post", to "edit".

   c. Edit a movie review for a movie that has already been posted, though this will not over wright the posted review. It will add another review of the same movie to the reviews section when posted.

   d. Delete a movie from the list. This will remove the individual movie from the watch list.

   e. There is a play button which is not functional and purely placed for the purposes of visual demonstration that would allow the user to play the movie.

4. Within the watch list component, while the user has checked a number of their movies as watched, the user will be able to remove those watched movies by clicking on the "remove watched" button. This will update the watch list state to only include the movies that have not been marked as watched.

5. The user will be able to remove all movies from their watch list by clicking on the "remove all" button. This will update the watch list state to a blank default.

## Review Components

1. On posting a review the user will be able to view their review posts in the reviews section.

2. The review components behave in a similar way as the watch list and card components in that there is the review list component that calls the individual watch card components to be rendered.

## Top Screen Component

1. The top screen component contains the handling of which specific components to call, whether the recommended, watch list or reviews sections, depending on what the user selects.

2. The top screen contains the states for the watch list and review list which are passed through the child components using props.

# Technologies Used

1. This project was made using the React framework.

2. Axios was used to make a request to the supplied API.

# Unsolved Problems

1. In the interest of time it was not possible to work on the optional stretch goals displayed in the client specification, although these will be worked on in future iterations of this SPA, post project submission and marking. Based on the functionality of the SPA and feedback from the educator the client specification deliverables should be met.

2. Given the time limitations it was not possible to fully test each feature to a level of confidence I am used to. For instance, it is uncertain whether the API could return the same movie on future calls and then be added to the watch list again by the user in duplication. This is possibly an unsolved problem to think about in future iterations.
