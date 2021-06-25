# Full Stack Tech Challenge: The Code Review

For this challenge, you will need to review a pull request. 

We're interested in seeing: 

1. How well you know Javascript
2. How well you communicate what you know to others
3. What you think is most important

We're not worried about: 

1. How well you know Express (although it wouldn't hurt)
2. How well you know how to use the BigQuery SDK (it's there, but it won't bite)

There's no trap or trick here, try to treat it as you would in a realistic situation. Don't go overboard, 20 comments aren't needed, but try to leave more than 2 or we won't really know what you thought. Assume that everything can be changed, but that it works as it is.

The pull request is the first pull request for a new repository, housing a new application, which is a simple HTTP API server with one endpoint. 

#### Some background on the app

The endpoint has the following query parameters: `app_id=[id]&from=[ordered_id]`, where `ordered_id` is an id that is used for pagination and `id` is the id for the app to which the data belongs. The server fetches data from BigQuery, a set of events for a certain "app", and returns the events to the caller in a JSON array.

#### How to submit the assignment

First of all, please keep your work private, away from the prying eyes of other applicants. 

In order to accomplish that, please create a private repository and invite us to it. In that repository, you should open a PR from the branch `setup` to the branch `main`. After making the PR, you should review it! Then send us the link and, given that we have access to your private repository, we'll take a look.






