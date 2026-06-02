# FightIQ Hub

FightIQ Hub is a modern dark-themed React web application for combat-sports education, training discussion, fictional simulations, and local fight-stream style interaction.

The app is designed as a university React final project and demonstrates React Router, reusable components, props, state management, hooks, forms, list rendering, CRUD operations, localStorage persistence, and a clean folder structure.

## Main Features

- **Home Page** with a hero section and feature cards.
- **Martial Art Quiz** that recommends Boxing, Brazilian Jiu-Jitsu, Wrestling, Muay Thai, Judo, Karate, or MMA.
- **Fight IQ Quiz** with scenario-based questions and score-based results.
- **Myth Buster** with reusable myth cards and detailed explanations.
- **Gorilla Simulator** with a humorous fictional calculator, disclaimer, and progress bar.
- **Community Forum** with full CRUD: create, read, update, and delete posts.
- **Local Fight Streams** with fight-card selection, embedded placeholder video, comments, and localStorage persistence.

## Technologies Used

- React
- Vite
- React Router DOM
- JavaScript
- CSS
- localStorage

## Project Structure

```txt
src/
  components/
    FeatureCard.jsx
    Footer.jsx
    MythCard.jsx
    Navbar.jsx
    PageHeader.jsx
    PostCard.jsx
    PostForm.jsx
    ProgressBar.jsx
    StreamCard.jsx
    VideoList.jsx
  data/
    myths.js
    streams.js
    videos.js
  pages/
    CommunityForum.jsx
    FightIQQuiz.jsx
    GorillaSimulator.jsx
    Home.jsx
    LocalFightStreams.jsx
    MartialArtQuiz.jsx
    MythBuster.jsx
    NotFound.jsx
  utils/
    storage.js
  App.jsx
  main.jsx
  styles.css
```

## How to Install and Run

1. Install Node.js.
2. Open the project folder in VS Code or a terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal, usually:

```txt
http://localhost:5173
```

## How This Project Fulfills React Requirements

- **React components:** The app uses reusable components such as Navbar, FeatureCard, MythCard, PostForm, PostCard, StreamCard, ProgressBar, PageHeader, and VideoList.
- **Props:** Data is passed from pages to components through props, for example myth data, stream data, post data, and event handlers.
- **State management:** useState is used for quiz answers, form values, selected myths, selected streams, comments, results, and forum posts.
- **Hooks:** useState and useEffect are used throughout the project.
- **Routing:** React Router provides routes for Home, quizzes, Myth Buster, Gorilla Simulator, Forum, Streams, and Not Found.
- **Forms:** The quizzes, Gorilla Simulator, Forum, and Stream Comments all use forms.
- **List rendering:** The app uses map() to render cards, questions, answers, videos, posts, streams, myths, and comments.
- **CRUD:** The Community Forum supports creating, listing, editing, and deleting posts.
- **localStorage:** Forum posts and stream comments are saved locally in the browser.
- **Clean structure:** Files are organized into components, pages, data, and utils folders.

## Safety and Education Note

FightIQ Hub does not encourage real violence. The project focuses on martial arts education, sports training, community discussion, and entertainment. The Gorilla Simulator is intentionally fictional and humorous.

## Future Improvements

- Add user authentication.
- Add real video playlists from an API.
- Add quiz history and progress tracking.
- Add filtering/search for forum posts.
- Add more martial arts and deeper recommendations.
- Add admin moderation tools for forum content.
