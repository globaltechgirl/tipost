import type { FC } from "react";
import { Card, Text } from "@mantine/core";

// Props interface for MessageCard
interface MessageCardProps {
  type: "success" | "error";
  text: string;
}

/**
 * MessageCard Component
 *
 * - Displays a small toast-style message at the bottom-right of the screen.
 */

const MessageCard: FC<MessageCardProps> = ({ type, text }) => {
  // Shared styles for the card container
  const cardStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 999,
    backgroundColor: "var(--white-200)",
    borderRadius: 12,
    border: "0.5px solid var(--white-400)",
    minWidth: 200,
    textAlign: "center",
  };

  // Shared styles for the inner text
  const textStyle: React.CSSProperties = {
    border: "0.5px solid var(--white-400)",
    backgroundColor: "var(--white-100)",
    borderRadius: 8,
    padding: 10,
    fontSize: 9.5,
    fontWeight: 400,
    color: type === "success" ? "var(--black-200)" : "var(--black-100)",
  };

  return (
    <Card p={6} style={cardStyle}>
      <Text style={textStyle}>{text}</Text>
    </Card>
  );
};

export default MessageCard;
