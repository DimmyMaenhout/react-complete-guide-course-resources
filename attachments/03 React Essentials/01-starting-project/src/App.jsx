import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data-with-examples";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleClick(selectedButton) {
    // selectedButton => 'components, 'jsx', 'props', 'state'
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return <CoreConcepts key={concept.title} {...concept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>State</TabButton>
          </menu>

          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              {" "}
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
