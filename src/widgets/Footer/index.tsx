"use client";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="flex items-center justify-center p-4">
        <p className="text-xs text-muted-foreground">
          Copyright © {date} ariful.io. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
