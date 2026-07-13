// Updates --mx/--my CSS variables on the hovered element so the
// .spotlight-card CSS can position a radial-gradient glow at the cursor.
export function handleSpotlightMove(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
