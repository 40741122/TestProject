import React, { useState } from 'react';
import { Button } from 'react-native';

import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailPage';

export default function App() {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <>
    <Button
      title={isOn? 'Turn Off' : 'Turn On'}
      onPress={() => setIsOn(!isOn)}
    />
    {isOn ? <HomePage/> : <DetailsPage/>}
    </>
  );
}

