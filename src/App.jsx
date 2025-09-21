import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider, Box } from "@mantine/core";

function PatternLayer({ color, position }) {
  return (
    <Box
      style={{
        "--size": "50px",
        position: "absolute",
        width: "100%",
        height: "250vmax",
        background:
          "radial-gradient(currentcolor 9px, #111 9px, #111 18px, transparent 18px)",
        backgroundSize: "var(--size) var(--size)",
        mixBlendMode: "difference",
        color,
        backgroundPosition: position,
      }}
    />
  );
}

export default function App() {
  return (
    <MantineProvider>
      <Box
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background:
            "radial-gradient(circle closest-side, mediumpurple, black, cyan)",
          backgroundSize: "50px 50px",
          position: "relative",
        }}
      >
        <PatternLayer color="rgb(0,102,255)" position="-25px -25px" />
        <PatternLayer color="rgb(255,50,50)" position="-35px -35px" />
        <PatternLayer color="rgb(50,205,50)" position="25px 25px" />
        <PatternLayer color="rgb(255,165,0)" position="35px 35px" />
      </Box>
    </MantineProvider>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
createRoot(rootEl).render(<App />);
