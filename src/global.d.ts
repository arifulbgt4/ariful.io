// Global type declarations

// Allow CSS imports
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Allow side-effect CSS imports
declare module "*.css";
