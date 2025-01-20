import React from "react";

export default function Page() {
  return (
    <div>
      <h2>Main Content Area</h2>
      <p>
        This is the main content section of the page. The left menu is
        collapsible, and the navbar remains fixed at the top.  The footer is at
        the bottom.
      </p>
      {Array.from({ length: 50 }, (_, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet 
          tincidunt lorem, a cursus magna tristique id. Praesent eu orci nec magna 
          tincidunt malesuada sit amet nec elit. Vivamus blandit.
        </p>
      ))}
    </div>
  );
}
