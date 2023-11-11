import React, { useState, useEffect } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import {marked} from 'https://esm.sh/marked';

const initialState =`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`


function Markdown(){
  const [text, setText] = useState(initialState);
  
  function handleChange(e) {
    const value = e.target.value;
    setText(value)
  }
  
   const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href=${href}>${text}</a>`;
  };

  marked.setOptions({
    breaks: true
  });
  
  return(
    <div className="wrapper">
      <div id="edit-box">
        <textarea rows="4" columns="40" id="editor" value={text} onChange={handleChange} />
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text, {renderer}) }}>
        </div>
    </div>
  )
}

function App() {
  return <Markdown />;
}

ReactDOM.render(<App />, document.getElementById("root"));