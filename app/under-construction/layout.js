// app/construction/layout.js
export default function ConstructionLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0 }}>
        {children} {/* ONLY construction content, no nav/footer */}
      </body>
    </html>
  );
}