import './BrandSection.css';
import { useNavigate } from 'react-router-dom';

import LogoIMJP from '../../../../assets/image/LogoIMJP.png'
function BrandSection() {
    const navigate = useNavigate();
    const handleClick=()=> {
        navigate(`/candidates`)
    }
    return(
        <img 
            src={LogoIMJP}
            className='brand-section'
            onClick={()=>handleClick()}
        >

        </img>
    )
}

export default BrandSection;