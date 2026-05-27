# CapFilter - Reddit Mod-Intelligence Tool

An automated mod-intelligence tool built natively on Devvit to instantly detect cross-platform spam and accurately categorize Reddit posts, saving moderators countless hours of manual labor.

## Features

CapFilter acts as an invisible assistant for subreddit mod teams with the following capabilities:

- **Cross-Platform Protection**: Automatically scans post titles and content to detect and flag external links (Instagram, TikTok, Twitter, YouTube).
- **Author Authority (Cap Elite)**: Analyzes content for high-impact keywords (e.g., "urgent", "breaking") to prioritize quality posts.
- **Automated Flairing**: Instantly assigns relevant custom flairs (e.g., '🔥 High Impact', '📱 Cross-Platform Risk', or '🎩 Cap Elite') using the `setPostFlair` API based on the context.
- **Analytics Dashboard**: Utilizes Redis in the backend to maintain a live counter of filtered content, providing moderators with actionable data.
- **Pure Native Execution**: Built entirely using the Devvit Public API without relying on external web server wrappers (no Hono/Vite bloat).

## Tech Stack

- [Devvit](https://developers.reddit.com/): Reddit's platform for building and deploying apps natively.
- [TypeScript](https://www.typescriptlang.org/): For strict type-safe development.
- **Redis**: For state management and analytics tracking.

## Getting Started

1. **Clone this repository**
2. **Install dependencies**:
```bash
   npm install
