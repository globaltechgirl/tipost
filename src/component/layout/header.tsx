import type { FC } from "react";
import { Group, Anchor, Image, Avatar } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconWorld,
} from "@tabler/icons-react";
import logo from "@/assets/logo.png";
import profile from "@/assets/profile.png";

/**
 * Header Component
 *
 * Displays a logo, social media links, and profile avatar.
 */

const Header: FC = () => {
  // Style for social anchors
  const socialAnchorStyle = {
    color: "var(--black-100)",
    backgroundColor: "var(--white-100)",
    borderRadius: "8px",
    padding: "7px 9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0px 3px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Group h={60} px="md" justify="space-between" align="center">
      {/* Logo */}
      <Image src={logo} alt="Logo" w={50} h="auto" fit="contain" />

      {/* Social Media Links */}
      <Group
        gap={12}
        p="5px"
        style={{
          backgroundColor: "var(--white-200)",
          borderRadius: "12px",
        }}
      >
        <Anchor
          href="https://titaniumtraining.online/"
          target="_blank"
          style={socialAnchorStyle}
        >
          <IconWorld size={15} />
        </Anchor>

        <Anchor
          href="https://www.linkedin.com/company/titanium-training/"
          target="_blank"
          style={socialAnchorStyle}
        >
          <IconBrandLinkedin size={15} />
        </Anchor>

        <Anchor
          href="https://www.instagram.com/titanium_training1101/"
          target="_blank"
          style={socialAnchorStyle}
        >
          <IconBrandInstagram size={15} />
        </Anchor>

        <Anchor
          href="https://web.facebook.com/people/Titanium-Training/61555399171641/?mibextid=ZbWKwL"
          target="_blank"
          style={socialAnchorStyle}
        >
          <IconBrandFacebook size={15} />
        </Anchor>
      </Group>

      {/* Profile Avatar */}
      <Anchor href="https://github.com/your-repo-link" target="_blank">
        <Avatar
          src={profile}
          alt="Onyinye Ofili"
          radius="xl"
          size={30}
          style={{ border: "0.5px solid var(--black-200)" }}
        />
      </Anchor>
    </Group>
  );
};

export default Header;
