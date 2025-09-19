import type { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { Stack, Text, Card } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import PostsGrid from "@/component/posts/postGrid";

/**
 * Posts Page Component
 *
 * Displays a back-to-home link and a grid of posts.
 */

const Posts: FC = () => {
  // Select posts array from Redux store
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <Stack
      p="md"
      mt={80}
      gap={30}
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      {/* Back to Home Button */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Card
          shadow="none"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            padding: "4px 8px",
            borderRadius: 8,
            border: "0.5px solid var(--white-400)",
            backgroundColor: "var(--white-200)",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          <IconArrowLeft size={10} color="var(--black-200)" />
          <Text
            style={{
              fontSize: 9,
              fontWeight: 500,
              color: "var(--black-200)",
            }}
          >
            Home
          </Text>
        </Card>
      </Link>

      {/* Posts Grid */}
      <PostsGrid posts={posts} />
    </Stack>
  );
};

export default Posts;
