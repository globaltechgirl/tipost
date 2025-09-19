import type { FC } from "react";
import { Card, Stack, Group, Text, TextInput, Textarea, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

// Post interface for typing
interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

// Props interface for CreatePostCard
interface CreatePostCardProps {
  editingPost: Post | null;
  setEditingPost: (post: Post | null) => void;
  title: string;
  setTitle: (title: string) => void;
  body: string;
  setBody: (body: string) => void;
  handleCreate: () => void;
  handleUpdate: () => void;
}

/**
 * CreatePostCard Component
 *
 * - Handles both creating and editing a post.
 */

const CreatePostCard: FC<CreatePostCardProps> = ({
  editingPost,
  setEditingPost,
  title,
  setTitle,
  body,
  setBody,
  handleCreate,
  handleUpdate,
}) => {
  const handleCancelEdit = () => {
    setEditingPost(null);
    setTitle("");
    setBody("");
  };

  // Shared styles for buttons
  const buttonStyle: React.CSSProperties = {
    background: "transparent",
    border: "0.5px solid var(--white-400)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "2px 3px",
    cursor: "pointer",
  };

  // Shared styles for button text
  const buttonTextStyle: React.CSSProperties = {
    border: "0.5px solid var(--white-400)",
    borderRadius: 6,
    backgroundColor: "var(--white-100)",
    padding: "2px 10px",
    margin: 0,
    fontWeight: 500,
    fontSize: 8.5,
    color: "var(--black-100)",
  };

  // Shared styles for inputs
  const inputStyles = {
    input: {
      border: "0.5px solid var(--white-400)",
      backgroundColor: "var(--white-100)",
      borderRadius: 8,
      padding: "10px",
      fontSize: 10,
      fontWeight: 400,
      color: "var(--black-200)",
    },
  };

  return (
    <Card
      p={6}
      style={{
        backgroundColor: "var(--white-200)",
        borderRadius: 12,
        border: "0.5px solid var(--white-400)",
      }}
    >
      <Stack gap="sm">
        {/* Header with action buttons */}
        <Group justify="space-between" align="center" p="0px 6px">
          <Text style={{ fontSize: 11, fontWeight: 500, color: "var(--black-100)" }}>
            {editingPost ? "Edit Post" : "Create a New Post"}
          </Text>

          <Group gap={5}>
            {editingPost ? (
              <>
                {/* Update button */}
                <Button onClick={handleUpdate} unstyled style={buttonStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <p style={buttonTextStyle}>Update Post</p>
                    <IconArrowRight size={10} color="var(--black-100)" />
                  </div>
                </Button>

                {/* Cancel button */}
                <Button onClick={handleCancelEdit} unstyled style={{ background: "transparent", padding: 0, cursor: "pointer" }}>
                  <p style={buttonTextStyle}>Cancel</p>
                </Button>
              </>
            ) : (
              // Add Post button
              <Button onClick={handleCreate} unstyled style={buttonStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <p style={buttonTextStyle}>Add Post</p>
                  <IconArrowRight size={10} color="var(--black-100)" />
                </div>
              </Button>
            )}
          </Group>
        </Group>

        {/* Input fields */}
        <Stack gap={6}>
          {/* Post Title */}
          <TextInput
            placeholder="Enter post title"
            value={editingPost ? editingPost.title : title}
            onChange={(e) =>
              editingPost
                ? setEditingPost({ ...editingPost, title: e.target.value })
                : setTitle(e.target.value)
            }
            styles={inputStyles}
          />

          {/* Post Body */}
          <Textarea
            placeholder="Enter post body"
            minRows={5}
            value={editingPost ? editingPost.body : body}
            onChange={(e) =>
              editingPost
                ? setEditingPost({ ...editingPost, body: e.target.value })
                : setBody(e.target.value)
            }
            styles={{ input: { ...inputStyles.input, height: "100px" } }}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

export default CreatePostCard;
