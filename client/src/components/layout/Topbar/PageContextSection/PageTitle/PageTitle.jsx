import './PageTitle.css';
import useRouteTitle from '../../../../../hooks/useRouteTitle';

function PageTitle(){
    const title = useRouteTitle();
    return(
        <div className='page-title'>{title}</div>
    )
}

export default PageTitle;