import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { setPosts, addPost, updatePost, deletePost } from "@/store/slices/postsSlice";
import { Stack, Image, Title, Group, Text } from "@mantine/core";
import { IconBolt, IconCheck, IconBell } from "@tabler/icons-react";

import MessageLogo from "@/assets/message.png";
import CreatePostCard from "@/component/home/createPostCard";
import SearchCard from "@/component/home/searchCard";
import PostsGrid from "@/component/home/postsGrid";
import MessageCard from "@/component/home/messageCard";

// Post interface for strong typing
interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

/**
 * Main Component
 *
 * Handles:
 * - Fetching posts from API
 * - Creating, updating, deleting posts
 * - Searching posts
 * - Displaying posts grid
 * - Showing success/error messages
 */

const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);

  // Local state for post creation/updating
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Filter posts based on search input
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );

  /* Handle creating a new post */
  const handleCreate = async () => {
    if (!title.trim() || !body.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      if (!response.ok) throw new Error("Failed to add post");

      const data: Post = await response.json();
      dispatch(addPost(data));
      setTitle("");
      setBody("");
      setMessage({ type: "success", text: "Post created successfully!" });
    } catch {
      setMessage({ type: "error", text: "Failed to create post." });
    }

    // Auto-dismiss message after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  };

  /* Handle updating an existing post */
  const handleUpdate = async () => {
    if (!editingPost) return;

    const updatedPost: Post = {
      ...editingPost,
      createdAt: editingPost.createdAt || new Date().toISOString(),
    };

    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedPost),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      dispatch(updatePost(updatedPost));
      setEditingPost(null);
      setMessage({ type: "success", text: "Post updated successfully!" });
    } catch {
      setMessage({ type: "error", text: "Failed to update post." });
    }

    setTimeout(() => setMessage(null), 3000);
  };

  /* Handle deleting a post */
  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      dispatch(deletePost(id));
      setMessage({ type: "success", text: "Post deleted successfully!" });
    } catch {
      setMessage({ type: "error", text: "Failed to delete post." });
    }

    setTimeout(() => setMessage(null), 3000);
  };

  /* Fetch initial posts on component mount */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data: Omit<Post, "createdAt">[] = await res.json();
        const postsWithDate: Post[] = data.map((post) => ({ ...post, createdAt: new Date().toISOString() }));
        dispatch(setPosts(postsWithDate));
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    fetchPosts();
  }, [dispatch]);

  return (
    <Stack p="md" mt={80} gap={30} style={{ maxWidth: 800, margin: "0 auto" }}>
      {/* Header Section */}
      <Stack gap={0} align="center">
        <Image src={MessageLogo} alt="Message logo" w={40} h={40} mb={4} />
        <Title style={{ fontSize: 32, fontWeight: 400, color: "var(--black-100)", textAlign: "center" }}>
          The latest in TiPost
        </Title>
        <Title style={{ fontSize: 32, fontWeight: 400, color: "var(--white-400)", textAlign: "center" }}>
          delivered to your inbox weekly.
        </Title>
        <Group gap="sm" mt={20}>
          <Group gap={4}>
            <IconBolt size={9.5} stroke={1.5} style={{ color: "var(--white-400)" }} />
            <Text style={{ fontSize: 9.5, fontWeight: 450, color: "var(--white-400)" }}>Easy to use</Text>
          </Group>
          <Group gap={4}>
            <IconCheck size={9.5} stroke={1.5} style={{ color: "var(--white-400)" }} />
            <Text style={{ fontSize: 9.5, fontWeight: 450, color: "var(--white-400)" }}>Hassle free</Text>
          </Group>
          <Group gap={4}>
            <IconBell size={9.5} stroke={1.5} style={{ color: "var(--white-400)" }} />
            <Text style={{ fontSize: 9.5, fontWeight: 450, color: "var(--white-400)" }}>Fast updates</Text>
          </Group>
        </Group>
      </Stack>

      {/* Create / Edit Post Section */}
      <CreatePostCard
        editingPost={editingPost}
        setEditingPost={setEditingPost}
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
      />

      {/* Search Posts */}
      <SearchCard search={search} setSearch={setSearch} />

      {/* Posts Grid */}
      <PostsGrid posts={filteredPosts} onEdit={setEditingPost} onDelete={handleDelete} />

      {/* Message Toast */}
      {message && <MessageCard type={message.type} text={message.text} />}
    </Stack>
  );
};

export default Main;
