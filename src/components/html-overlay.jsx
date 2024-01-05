import { Button } from "@mui/material";
import { SearchBar } from "./SearchBar";
import "./html-overlay.css";

export const HtmlOverlay = () => {
  return (
    <div id="html-overlay">
      <SearchBar />
      <Button variant="contained">Add Tour</Button>
    </div>
  );
};
