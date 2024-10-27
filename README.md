### bookworm
## Inspiration
As people who love to read, we know how annoying it is to try to find new book recommendations on our own. For this reason, we wanted to create a web application that would curate book recommendations based on whether or not we liked the summary of the book. Given the popularity of generative AI models, we decided to leverage them to give users a list of books based on whether they clicked the checkmark on a particular book.

## What it does
bookworm is a book recommendation app where users are presented with a list of books they can swipe left or right on to find their next best read. The user at first is presented with a book and depending on which way they swipe on it, the next book is presented to them. If they click on the card, it flips the book around to display the book summary.

## How we built it
We split our project into 2 parts: frontend and backend. The frontend used JavaScript, ReactJS, and HTML/CSS. We created a homepage with the actual recommendation system and a profile page where users can sign up using PropelAuth. Then in the backend, we had a machine learning model we developed using Numpy, Pandas, and Weaviate. We connected the frontend to the backend using Flask. 

## Challenges we ran into
We faced challenges with connecting the frontend and backend, especially with implementing the ML model into the app itself. For the ML model, we created a database of books, and we had to integrate that into the model to ensure that the correct books were being displayed. Additionally, it was a challenge to connect PropelAuth to the backend of the project. There were a few issues we ran into when implementing this step, such as the signup page not showing up after the button was clicked. Furthermore, we had some issues with the ML model not picking books from the dataset that we provided, but we managed to fix that by refining the prompt.

## Accomplishments that we're proud of
We successfully connected the frontend and back end, which was the hardest part of the project. This took a lot of time and effort, and we were able to produce a working product of what we envisioned. We also made the app design very uniform and appealing. 

## What we learned
A major thing we learned (because we spent so much time trying to figure it out) was how to successfully connect the frontend to the backend using Flask. We also learned how to debug code to see exactly what was going wrong and where and then figure out how to fix it. We also learned how to develop a machine-learning model for recommendations and use Weaviate to display the results properly. Additionally, we learned how to properly implement React features, such as clicking a button, and connecting it with our model and PropelAuth.

## What's next for bookworm
We want to implement a “stop” button that, when clicked, gives users a list of recommended books. Furthermore, we want to expand bookworm to create a community of readers who can interact with each other by posting their book recommendations in different “subworms.” This would create a great community element that would attract users to our platform. Furthermore, we would like to refine our ML model so that it gives books in an entirely different category when the X is clicked.
