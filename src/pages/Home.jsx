import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-gray-900 to-black">
        <Container className="max-w-md p-4 md:p-6 lg:p-8">
          <div className="flex flex-wrap">
            <div className="w-1/2 p-2">
              <img
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Image"
                className="w-full h-72 object-fill h-200px rounded-t-lg mb-4 shadow-md shadow-slate-500"
              />
            </div>
            <div className="w-1/2 p-2 ml-">
              <h1 className="text-5xl font-bold mb-4 text-white">
                Welcome to Blogify <br />
              </h1>
              <span className="text-5xl text-orange-500 mt-5 p-5">
                Explore the latest blogs and stay updated!
              </span>
              <p className="text-2xl text-gray-500 mt-9 mb-8">
                Stay updated with the latest posts from everyone around the
                world! and discover new insights.
              </p>
              <Link
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                to="/login"
              >
                Login to Read Posts
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-center mt-4">
            <img
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature 1"
              className="w-1/3 h-40 object-cover rounded mr-4 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
            <img
              src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature 2"
              className="w-1/3 h-40 object-cover rounded mr-4 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature 3"
              className="w-1/3 h-40 object-cover rounded shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
          </div> */}
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full h-[54vh] max-h-screen py-8 bg-gradient-to-r from-gray-900 to-black">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
