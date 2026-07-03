import './Topbar.css'

import BrandSection from '../../../components/layout/Topbar/BrandSection/BrandSection';
import PageTitle from '../../../components/layout/Topbar/PageContextSection/PageTitle/PageTitle';
import NavigationSection from '../../../components/layout/Topbar/NavigationSection/NavigationSection';
import UserSection from '../../../components/layout/Topbar/UserSection/UserSection';
import AccountMenuSection from '../../../components/layout/Topbar/AccountMenuSection/AccountMenuSection';


function TopBar(){
   
    return(
        <div className='topbar'>
            <BrandSection/>
            <div className='page-context-section'>
                <PageTitle/>
                <NavigationSection/>
            </div>
            <div className='right-section'>
                <UserSection
                />
                <AccountMenuSection/>
            </div>
        </div>
    )
}

export default TopBar;
