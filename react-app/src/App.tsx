import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./ListGroup";

function App() {
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>

  // return <div>
  //   <Alert>
  //     Hello <span> World </span>
  //   </Alert>
  // </div>;
  const [alertActive, setAlertActive] = useState(false);

  return (
    <div>
      <Alert alertActive={alertActive} onClick={() => setAlertActive(false)}>
        You've clicked the button!
      </Alert>
      <Button onClick={() => setAlertActive(true)} color='success'>
        My Button
      </Button>
    </div>
  );
}

export default App;
