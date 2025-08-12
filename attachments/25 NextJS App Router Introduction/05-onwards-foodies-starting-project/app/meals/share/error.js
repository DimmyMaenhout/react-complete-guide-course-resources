// If we were to place this file in the root of our project every error would be handled by this, now it's just the files in the app folder and its nested pages or layouts

"use client";

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurered!</h1>
      <p>Faild to create meal.</p>
    </main>
  );
}
