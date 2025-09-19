import type { FC } from "react";
import { Card, Text, Group } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { ROUTES } from "@/utils/constants";

// TypeScript interface for a Post
export interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

// Props interface for PostCard component
interface PostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

/**
 * PostCard Component
 * Renders an individual post with:
 * - Post initial preview (left)
 * - External link, Date, title, body, edit/delete ations (right)
 */

const PostCard: FC<PostCardProps> = ({ post, onEdit, onDelete }) => {
  // Card style for outer container 
  const cardStyle: React.CSSProperties = { 
    display: "flex", 
    flexDirection: "row", 
    height: 200, 
    backgroundColor: "var(--white-100)", 
    borderRadius: 12,
    border: "0.5px solid var(--white-400)", 
    gap: 6, 
  };

  // Left initial box 
  const initialBoxStyle: React.CSSProperties = {
    flex: 0.8,
    backgroundColor: "var(--white-200)",
    border: "0.5px solid var(--white-400)",
    borderRadius: 8,
    padding: "4px 8px",
    fontWeight: 600,
    fontSize: "clamp(24px, 8vw, 40px)",
    color: "var(--black-200)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    minWidth: 60,
    height: "100%",
    textAlign: "center",
    wordBreak: "break-word",
  };

  // Right content container 
  const contentStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
    padding: 6,
  };

  // Date badge styling
  const dateBadgeStyle: React.CSSProperties = {
    border: "0.5px solid var(--white-400)",
    borderRadius: 6,
    backgroundColor: "var(--white-200)",
    padding: "2px 8px",
    fontWeight: 500,
    fontSize: 8.5,
    color: "var(--black-200)",
    width: "fit-content",
  };

  // Text styling with line clamp
  const textClampStyle = (
    lines: number,
    fontSize: number,
    fontWeight: number,
    color: string
  ): React.CSSProperties => ({
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize,
    fontWeight,
    color,
  });

  // Action button styling
  const actionStyle = (bgColor: string): React.CSSProperties => ({
    cursor: "pointer",
    color: "var(--black-200)",
    border: "0.5px solid var(--white-400)",
    borderRadius: 6,
    backgroundColor: bgColor,
    padding: "2px 8px",
    fontWeight: 500,
    fontSize: 8.5,
  });

  return (
    <Card p={6} withBorder style={cardStyle}>
      {/* Left initial preview */}
      <div style={initialBoxStyle}>{post.title.slice(0, 5)}</div>

      {/* Right content */}
      <div style={contentStyle}>
        {/* Top link */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a href={ROUTES.POST} style={{ color: "var(--black-100)" }}>
            <IconArrowUpRight size={12} />
          </a>
        </div>

        {/* Bottom content + actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Post date */}
          <Text style={dateBadgeStyle}>
            {new Date(post.createdAt).toLocaleDateString()}
          </Text>

          {/* Post title */}
          <Text style={textClampStyle(2, 11, 500, "var(--black-100)")}>
            {post.title}
          </Text>

          {/* Post body */}
          <Text style={textClampStyle(3, 9, 400, "var(--black-200)")}>
            {post.body}
          </Text>

          {/* Actions */}
          <Group gap={8}>
            <Text style={actionStyle("var(--white-200)")} onClick={() => onEdit(post)}>
              Edit
            </Text>
            <Text style={actionStyle("var(--white-300)")} onClick={() => onDelete(post.id)}>
              Delete
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
