import type { FC } from "react";
import { useEffect, useState } from "react";
import { Text, Card } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import PostCard from "@/component/home/postCard"; 
import type { Post } from "@/component/home/postCard";

// Props interface for PostsGrid
interface PostsGridProps {
  posts: Post[]; 
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

/**
 * PostsGrid Component 
 *
 * Renders a grid of posts using PostCard components. 
 * Displays a fallback message when no posts are available.
 * Renders Prev/Next controls.
 */

const PostsGrid: FC<PostsGridProps> = ({ posts, onEdit, onDelete }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Reset to first page if filtered posts change
  useEffect(() => {
    setCurrentPage(1);
  }, [posts]);

  // Calculate current posts to display
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  // Handlers for pagination
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Fallback UI when no posts are available
  if (posts.length === 0) {
    return (
      <Card 
        p={6} 
        style={{ 
          backgroundColor: "var(--white-200)", 
          borderRadius: 12, 
          border: "0.5px solid var(--white-400)", 
          textAlign: "center", 
        }} 
      > 
        <Text 
          style={{ 
            fontSize: 10, 
            fontWeight: 450, 
            color: "var(--black-200)", 
            border: "0.5px solid var(--white-400)", 
            backgroundColor: "var(--white-100)", 
            borderRadius: 8, padding: "10px",
          }} 
        > 
          No similar posts found 
        </Text> 
      </Card>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
      className="post-grid"
    >
      {/* Render current page posts */}
      {currentPosts.map((post) => (
        <PostCard key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}

      {/* Pagination controls */}
      {posts.length > postsPerPage && (
        <div           
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              backgroundColor: "var(--white-100)", 
              borderRadius: 12,
              border: "0.5px solid var(--white-400)",
              padding: 4, 
              width: "fit-content",
              height: "fit-content"
            }}
          >
            {/* Prev Arrow */}
            <div
              style={{
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: "var(--white-200)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                opacity: currentPage === 1 ? 0.5 : 1,
              }}
              onClick={handlePrev}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "var(--white-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconChevronLeft size={14} />
              </div>
            </div>

            {/* Next Arrow */}
            <div
              style={{
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: "var(--white-200)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                opacity: currentPage === totalPages ? 0.5 : 1,
              }}
              onClick={handleNext}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "var(--white-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconChevronRight size={14} />
              </div>
            </div>
          </div>  
        </div>
      )}
    </div>
  );
};

export default PostsGrid;
