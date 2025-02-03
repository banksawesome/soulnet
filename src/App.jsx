import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
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

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="flex max-w-7xl mx-auto px-4 py-20">
            <Sidebar />
            <main className="flex-1 mx-4">
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
              </Routes>
            </main>
            <RightSidebar />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;