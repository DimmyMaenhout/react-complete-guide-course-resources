
// the folder called [slug]: This square bracket thing simply tells NextJS that we want to have some path segment after "blog" in this case, but that we don't know the exact value of the segment. This placeholder (identifier) [slug] that will give us access to the concrete value that we do get when that route is loaded because NextJS actually passes a props object to all those page components
export default function BlogPostPage() {
  return (
    <main>
      <h1>Blog Post</h1>
    </main>
  );
}
