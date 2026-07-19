import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import useScreenSupport from './hooks/screen/useScreenSupport';
import UnsupportedScreen from './components/common/UnsupportedScreen/UnsupportedScreen';
import ToastProvider from './components/common/Toast/ToastContext';

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
      <ToastProvider>
        <AppRoutes/>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;