import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 h-[54vh] max-h-screen bg-gradient-to-r from-gray-900 to-black">
      <Container>
        <div className="w-96 flex justify-center mb-4 relative border rounded-xl p-2 shadow-md shadow-slate-500">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl object-contain w-auto h-48"
          />
        </div>

        <div className="w-full flex mb-6 space-x-4">
          <h2 className="text-3xl font-bold text-white ">{post.title}</h2>
          {isAuthor && (
            <div className="space-x-4">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="mr-3 hover:bg-green-700 transition duration-300 ease-in-out"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                onClick={deletePost}
                className="hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="browser-css text-white prose prose-lg max-w-none">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
