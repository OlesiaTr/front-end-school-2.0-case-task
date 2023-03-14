# The app's purpose

A web application for education that has two routes - course feed and course
view page.

## Details about the pages

1. The last 10 courses must be displayed in the course feed. It includes:

- Title
- Photo of the course
- Title of the course
- Number of lessons, skills and rating
- Add pagination, each page has 10 courses on it
- When hovering over the photo - the video should be played without sound

2. The course view page displays the first video from this course, details about
   the course and a list of lessons:

- When clicking on a lesson(if it is not blocked), the current video will open
  for viewing. The user must understand which lesson from the course they are
  viewing
- It is necessary to save the progress of watching the video and the lesson of
  the course(locally)
- If the lesson is blocked - it should be understood by user

## Major functions & dependencies

Added asynchronous JS code loading for the application routes using React.lazy()
and Suspense.

- Axios
- Modern normalize
- Prop-types
- Styled components

## Preparing for work

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Install the project's base dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.
