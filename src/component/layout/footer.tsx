import type { FC } from "react";
import { Text, Stack, Anchor } from "@mantine/core";

/**
 * Footer Component
 *
 * Displays a footer with:
 * - Top border
 * - Centered copyright
 * - Clickable link to my GitHub profile
 */

const Footer: FC = () => {
  return (
    <Stack
      style={{
        width: "100%",                 
        marginTop: "30px",           
        borderTop: "0.5px solid var(--white-400)",  
        padding: "10px 0",                 
        alignItems: "center",            
        justifyContent: "center",        
      }}
    >
      <Text
        style={{
          fontSize: 10,                              
          textAlign: "center",                 
          color: "var(--black-200)",          
          fontWeight: 450,                 
        }}
      >
        © {new Date().getFullYear()} TiPost.{" "}
        <Anchor
          href="https://github.com/GlobalTechGirl"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--black-100)",
            textDecoration: "none",
            fontSize: 10,
            fontWeight: 450,
          }}
        >
          Created by GlobalTechGirl.
        </Anchor>
      </Text>
    </Stack>
  );
};

export default Footer;
