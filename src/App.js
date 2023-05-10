import "./styles.css";
import "mvp.css";

/* Example #1 : Button click with an alert */
// function ClickMe() {
//   function handleClick() {
//     alert("Hello Clicker!");
//   }
//   return <button onClick={handleClick}>Click Me</button>;
// }

// export default function App() {
//   return (
//     <>
//       <ClickMe />
//     </>
//   );
// }

/* Example #2 : Modified button with an alert */
// function ClickMe() {
//   return <button onClick={() => alert("Hello Inliner!")}>Click Me</button>;
// }

// export default function App() {
//   return (
//     <>
//       <ClickMe />
//     </>
//   );
// }

/* Example #3 : Button with alert to a link */
// function Events() {
//   function handleClick(event) {
//     event.preventDefault();
//     alert("No visit for you to " + event.target.href);
//   }

//   return (
//     <div>
//       <a href="https://google.ca" onClick={handleClick}>
//         This link has been hijacked!
//       </a>
//     </div>
//   );
// }

// export default function App() {
//   return <Events />;
// }

/* Example #4 : useState - counts the button Clicks */
// import React, { useState } from "react";

// function ClickCounter() {
//   const [count, setCount] = useState(0);

//   return <button onClick={() => setCount(count + 1)}>Clicks {count} ☝️</button>;
// }

// export default function App() {
//   return <ClickCounter />;
// }

/* Example #5 : Outputs count of button clicks */
// import React, { useState } from "react";

// function UpBoats() {
//   const [count, setCount] = useState(0);
//   const boats = count < 0 ? count : "⛵".repeat(count);
//   return (
//     <div>
//       <h2>Boats: {boats}</h2>
//       <button onClick={() => setCount(count - 1)}>👎</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count + 1)}>👍</button>
//     </div>
//   );
// }

// export default function App() {
//   return <UpBoats />;
// }

/* Example #6 : Data binding without change of input */
// import React, { useState } from "react";

// function Mirror() {
//   const [text, setText] = useState("On the wall");

//   function inputChanged(event) {
//     setText(event.target.value);
//   }
//   return (
//     <div>
//       <input onChange={inputChanged} value={text} />
//       <button>Clear Input</button>
//       <p>Mirror Mirror: {text}</p>
//     </div>
//   );
// }

// export default function App() {
//   return <Mirror />;
// }

/* Example #7 : Data binding */
// import React, { useState } from "react";

// function Mirror() {
//   const [text, setText] = useState("On the wall");

//   function inputChanged(event) {
//     setText(event.target.value);
//   }
//   return (
//     <div>
//       <input onChange={inputChanged} value={text} />
//       <button onClick={() => setText("")}>Clear Input</button>
//       <p>Mirror Mirror: {text}</p>
//     </div>
//   );
// }

// export default function App() {
//   return <Mirror />;
// }

/* Example #8 : Toggle button On and Off */
// import React, { useState } from "react";

// function ToggleButton() {
//   const [toggle, setToggle] = useState(false);
//   const buttonClass = toggle ? "on" : "off";

//   return (
//     <button className={buttonClass} onClick={() => setToggle(!toggle)}>
//       Using ClassName: {buttonClass}{" "}
//     </button>
//   );
// }

// export default function App() {
//   return <ToggleButton />;
// }

/* Example #9 */
// import React, { useState } from "react";

// function ToggleButton() {
//   const buttonStyle = {
//     backgroundColor: "rgb(215, 85, 15)",
//     border: "none",
//     fontSize: "40px",
//     height: "200px",
//     width: "200px"
//   };

//   return <button style={buttonStyle}>Styled Button</button>;
// }

// export default function App() {
//   return <ToggleButton />;
// }

/* Example #7 : Data binding, useState */
import React, { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  function addItem(event) {
    // Binded to form and button
    event.preventDefault();

    const trimmedText = newItem.trim();
    if (trimmedText === "") {
      return;
    }

    const newToDoItem = {
      text: newItem,
      done: false,
      timestamp: Date.now()
    };

    const newToDoItems = [...toDoItems, newToDoItem];

    setToDoItems(newToDoItems);

    setNewItem("");
  }

  function changeCompletion(toDo) {
    const changedToDoItems = toDoItems.map((item) => {
      if (item.timestamp === toDo.timestamp) {
        item.done = !item.done;
      }

      return item;
    });

    setToDoItems(changedToDoItems);
  }

  function clearCompleted() {
    const filteredToDoItems = toDoItems.filter((item) => !item.done);

    setToDoItems(filteredToDoItems);
  }

  return (
    <>
      <h1>Getting things done...</h1>
      <form>
        <input onChange={(e) => setNewItem(e.target.value)} value={newItem} />
        <button onClick={addItem}>Add</button>
      </form>

      <ol>
        {toDoItems.map((toDo) => {
          return (
            <li ke={toDo.timestamp}>
              <label>
                <input
                  type="checkbox"
                  checked={toDo.done}
                  onChange={() => changeCompletion(toDo)}
                />
                {toDo.done ? <del>{toDo.text}</del> : toDo.text}
              </label>
            </li>
          );
        })}
      </ol>

      {toDoItems.length > 0 && (
        <button onClick={clearCompleted}>Clear Complete</button>
      )}
    </>
  );
}
