import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../layouts/pageLayout';

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${userId}`);
        const userData = await response.json();
        console.log('User data:', userData); // Log the data to check its structure
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchFollowers = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${userId}/followers`);
        const followersData = await response.json();
        setFollowers(Array.isArray(followersData) ? followersData : []);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    const fetchFollowing = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${userId}/following`);
        const followingData = await response.json();
        setFollowing(Array.isArray(followingData) ? followingData : []);
      } catch (error) {
        console.error('Error fetching following:', error);
      }
    };

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${userId}/suggestions`);
        const suggestionsData = await response.json();
        setSuggestions(Array.isArray(suggestionsData) ? suggestionsData : []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${userId}/posts`);
        const postsData = await response.json();
        setPosts(Array.isArray(postsData) ? postsData : []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchUserProfile();
    fetchFollowers();
    fetchFollowing();
    fetchSuggestions();
    fetchPosts();
  }, [userId]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    setUpdatedProfile({
      ...updatedProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileUpdate = async () => {
    try {
      await fetch(`http://localhost:5000/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });
      setIsEditMode(false);
      const response = await fetch(`http://localhost:5000/profile/${userId}`);
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      await fetch(`http://localhost:5000/profile/${userId}`, {
        method: 'DELETE',
      });
      // Redirect to home page or login page after profile deletion
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
        {user ? (
          <>
            <div className="flex items-center mb-4">
              {user.profile?.profilePictureUrl && (
                <img
                  src={user.profile.profilePictureUrl}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover mr-4"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold">{user.username}</h1>
                <p className="text-xl text-gray-600">{user.profile?.name || 'N/A'}</p>
                <p className="text-gray-600">{user.profile?.bio || 'N/A'}</p>
                <p className="text-gray-600">{user.profile?.university || 'N/A'}</p>
              </div>
              <div className="ml-auto">
                {!isEditMode ? (
                  <div className="space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleEditClick}>
                      Edit Profile
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDeleteProfile}>
                      Delete Profile
                    </button>
                  </div>
                ) : (
                  <div className="space-x-2">
                    <input
                      type="text"
                      name="username"
                      value={updatedProfile.username || user.username}
                      onChange={handleInputChange}
                      className="border p-2 rounded"
                      placeholder="Username"
                    />
                    {/* Add input fields for other profile attributes */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleProfileUpdate}>
                      Save
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Followers</h2>
                <ul className="space-y-2">
                  {Array.isArray(followers) &&
                    followers.map((follower) => (
                      <li key={follower._id} className="p-2 bg-white rounded shadow">
                        {follower.username}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Following</h2>
                <ul className="space-y-2">
                  {Array.isArray(following) &&
                    following.map((follow) => (
                      <li key={follow._id} className="p-2 bg-white rounded shadow">
                        {follow.username}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
                <ul className="space-y-2">
                  {Array.isArray(suggestions) &&
                    suggestions.map((suggestion) => (
                      <li key={suggestion._id} className="p-2 bg-white rounded shadow">
                        {suggestion.username}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Posts</h2>
              <ul className="space-y-4">
                {Array.isArray(posts) &&
                  posts.map((post) => (
                    <li key={post._id} className="p-4 bg-white rounded-lg shadow-md">
                      <p>{post.content.text}</p>
                      {post.content.imageUrl && (
                        <img src={post.content.imageUrl} alt="Post" className="mt-2 w-full rounded" />
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    </PageLayout>
  );
};

export default Profile;
