// app/page.js
export const metadata = {
  title: "Under Construction",
  robots: {
    index: false,
  },
};

export default function Page() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        padding: "20px",
        minHeight: "100vh", // Full viewport height
        backgroundColor: "#fff", // Solid background
      }}
    >
      <h1>🚧 Website Under Construction.</h1>
      <p>We are working on it. Coming soon!</p>
    </div>
  );
}