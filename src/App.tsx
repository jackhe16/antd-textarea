import React, { FC, useState } from 'react';
import { Input } from 'antd';
import "antd/dist/antd.css";

const App: FC = () => {
  const [text, setText] = useState('text');

  return (
    <div className="App">
      <Input.TextArea value={text} />
    </div>
  );
}

export default App;