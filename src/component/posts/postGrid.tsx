import type { FC } from "react";
import { useState } from "react";
import { Card, Text, Group, ActionIcon } from "@mantine/core";
import {
  IconHeart,
  IconHeartFilled,
  IconBookmark,
  IconBookmarkFilled,
  IconQuoteFilled,
} from "@tabler/icons-react";

// Post interface for strong typing
interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

// Props interface for PostsGrid
interface PostsGridProps {
  posts: Post[];
}

/**
 * PostsGrid Component
 *
 * Displays a grid of posts with actions for liking and saving each post.
 */

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  // Track liked and saved posts in state, using post IDs as keys
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});
  const [savedPosts, setSavedPosts] = useState<{ [key: number]: boolean }>({});

  // Toggle like state for a post
  const toggleLike = (id: number) =>
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));

  // Toggle save state for a post
  const toggleSave = (id: number) =>
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));

  // Display message if no posts are available
  if (!posts.length)
    return <Text style={{ textAlign: "center" }}>No posts available</Text>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        alignItems: "start",
      }}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            borderRadius: "12px",
            border: "0.5px solid var(--white-400)",
            backgroundColor: "var(--white-100)",
            padding: "8px 6px 4px 6px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Post Badge */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: "var(--white-200)",
              border: "0.5px solid var(--white-300)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 15,
              color: "var(--black-200)",
            }}
          >
            {post.title[0].toUpperCase()}
          </div>

          {/* Post Content */}
          <Card
            mt={12}
            style={{
              backgroundColor: "var(--white-200)",
              borderRadius: 8,
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "8px",
              height: 180,
            }}
          >
            <IconQuoteFilled size={20} color="var(--black-200)" />
            <Text fw={500} style={{ fontSize: 11, color: "var(--black-100)" }}>
              {post.title}
            </Text>
            <Text
              fw={450}
              style={{ fontSize: 9, lineHeight: 1.5, color: "var(--black-100)" }}
            >
              {post.body}
            </Text>
          </Card>

          {/* Like and Save Actions */}
          <Group
            mt={6}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Like Button */}
            <ActionIcon onClick={() => toggleLike(post.id)} color="none" bg="none">
              {likedPosts[post.id] ? (
                <IconHeartFilled size={14} color="var(--black-200)" />
              ) : (
                <IconHeart size={14} color="var(--black-200)" />
              )}
            </ActionIcon>

            {/* Save Button */}
            <ActionIcon onClick={() => toggleSave(post.id)} color="none" bg="none">
              {savedPosts[post.id] ? (
                <IconBookmarkFilled size={14} color="var(--black-200)" />
              ) : (
                <IconBookmark size={14} color="var(--black-200)" />
              )}
            </ActionIcon>
          </Group>
        </Card>
      ))}
    </div>
  );
};

export default PostsGrid;
