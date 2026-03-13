import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioGeneral from './PortfolioGeneral';
import PortfolioDerma from './PortfolioDerma';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기존 링크 대응: 원래 주소(/)로 오면 365용 노출 */}
        <Route path="/" element={<PortfolioGeneral />} /> 
        
        {/* 새로운 링크: /centum으로 오면 센텀용 노출 */}
        <Route path="/derma" element={<PortfolioDerma />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;