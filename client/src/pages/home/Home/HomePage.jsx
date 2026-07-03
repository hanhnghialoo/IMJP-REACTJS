import './HomePage.css'

import PageContent from "../../../components/layout/PageContent/PageContent";
import TopBar from "../../../components/layout/Topbar/Topbar";

export default function HomePage (){
    return (
        <div className='home-page'>
            <TopBar/>
            <PageContent/>
        </div>
    );
}