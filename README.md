# `light-modal`

A simple modal react component to test library sharing on npm.
**Note:** is not intended to be used.

## Usage

```jsx
import { LightModal } from "light-modal-test4/dist/light-modal";
import React, { useState } from "react";

function MyComponent() {
  const [modalVisible, setModalVisible] = useState(false);

  const toogleModal = () => {
    setModalVisible(!modalVisible);

  };

  return (
    <>
        <LightModal onClick={toogleModal} modalVisible={modalVisible} text={"Employee created!"} />
    </>
  )

}

export default MyComponent;

```