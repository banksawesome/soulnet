import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Explore from './pages/Explore';
import Bookmarks from './pages/Bookmarks';
import Settings from './pages/Settings';
import Events from './pages/Events';
import Groups from './pages/Groups';
import Stories from './pages/Stories';
import Trending from './pages/Trending';
import Friends from './pages/Friends';
import Photos from './pages/Photos';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Communities from './pages/Communities';
import Marketplace from './pages/Marketplace';
import Gaming from './pages/Gaming';
import Live from './pages/Live';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
            <Navbar />
            <div className="flex w-full mx-auto">
              <Sidebar />
              <main className="flex-1 w-full px-0 sm:px-4 mx-auto max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/bookmarks" element={<Bookmarks />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/stories" element={<Stories />} />
                  <Route path="/trending" element={<Trending />} />
                  <Route path="/friends" element={<Friends />} />
                  <Route path="/photos" element={<Photos />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/communities" element={<Communities />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/gaming" element={<Gaming />} />
                  <Route path="/live" element={<Live />} />
                </Routes>
              </main>
              <RightSidebar />
            </div>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;