import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import useScreenSupport from './hooks/screen/useScreenSupport';
import UnsupportedScreen from './components/common/UnsupportedScreen/UnsupportedScreen';

function App() {
  const {
    isSupported,
    width,
    height,
    minWidth,
    minHeight
  } = useScreenSupport();

  if (!isSupported){
    return (
      <UnsupportedScreen
        width={width}
        height={height}
        minHeight={minHeight}
        minWidth={minWidth}
      />
    )
  }
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;