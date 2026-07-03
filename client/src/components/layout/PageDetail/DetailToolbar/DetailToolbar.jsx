import './DetailToolbar.css';

import Button from '../../../common/Button/Button';
import { useTranslation } from 'react-i18next';
import usePermission from '../../../../features/auth/hook/usePermission';

import { MdDelete } from "react-icons/md";

export default function DetailToolbar(){
    const {t} = useTranslation('candidateToolbar');
    const { canDeleteCandidate} = usePermission();
    return(
        <div className='detail-toolbar-content'>
            {canDeleteCandidate &&
                <Button
                    label={t('candidateToolbar:deleteCandidate')}
                    icon={<MdDelete/>}
                    variant='primary'
                    className='btn-detail-toolbar-delete'
                />
            }
        </div>
    )
}