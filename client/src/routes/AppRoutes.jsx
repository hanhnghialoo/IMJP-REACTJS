import { Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from '../pages/auth/Login/LoginPage';
import HomePage from '../pages/home/Home/HomePage';
import UsersPage from '../pages/users/UsersPage';
import CandidateDetailPage from '../pages/candidates/CandidateDetailPage';
import ReportPage from '../pages/report/ReportPage';

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/candidates" replace />} />
            <Route path='/user' element={<UsersPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/candidates' element={<HomePage/>} />
            <Route path='/candidates/:id' element={<CandidateDetailPage/>}/>
            <Route path='/report' element={<ReportPage/>}/>
            <Route path="*" element={<Navigate to="/candidates" replace />} />
        </Routes>
    )
}

export default AppRoutes; 