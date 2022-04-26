import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import React, { useState } from "react";

export const RichText = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "fontFamily",
          "list",
          "textAlign",
          "colorPicker",
          "link",
          "embedded",
          "emoji",
          "image",
          "history",
        ],
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
      }}
    />
  );
};
