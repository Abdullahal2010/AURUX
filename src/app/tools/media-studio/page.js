export const metadata = {
  title: "Media Recorder — AURUX",
};

export default function MediaStudioPage() {
  return (
    <iframe
      src="/media-studio.html"
      title="AURUX Media Recorder"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        background: "#0a0b0f",
      }}
    />
  );
}
