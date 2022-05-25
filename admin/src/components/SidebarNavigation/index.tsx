/* eslint-disable require-jsdoc */
import { Accordion, Anchor, Navbar } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { Logout } from "tabler-icons-react";

export function SidebarNavigation() {
  return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
      <Navbar.Section grow>
        <Accordion>
          <Accordion.Item label="Articles">
            <ul>
              <li>
                <Anchor component={Link} href="/articles">
                  All Articles
                </Anchor>
              </li>
              <li>
                <Anchor component={Link} href="/articles/create">
                  Add New
                </Anchor>
              </li>
              <li>
                <Anchor component={Link} href="/categories/edit">
                  Categories
                </Anchor>
              </li>
              <li>
                <Anchor component={Link} href="/tags/edit">
                  Tags
                </Anchor>
              </li>
            </ul>
          </Accordion.Item>
          <Accordion.Item label="Pages">
            <ul>
              <li>
                <Anchor component={Link} href="/pages">
                  All Pages
                </Anchor>
              </li>
              <li>
                <Anchor component={Link} href="/pages/create">
                  Add New
                </Anchor>
              </li>
            </ul>
          </Accordion.Item>
        </Accordion>
      </Navbar.Section>

      <Navbar.Section>
        <a href="#" onClick={(event) => event.preventDefault()}>
          <Logout />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
