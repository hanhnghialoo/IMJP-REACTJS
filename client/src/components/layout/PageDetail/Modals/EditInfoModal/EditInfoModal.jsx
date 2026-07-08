import './EditInfoModal.css';

import Button from '../../../../common/Button/Button';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import Input from '../../../../common/Input/Input';
import hasChanges from '../../../../../utils/Modal/hasChanges';

import { FaRegUser } from "react-icons/fa";
import { FaMars } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

import Select from '../../../../common/Select/Select';
import { buildProvince } from '../../../../../features/timeline/utils/buildProvince';
import useProvinceFilter from '../../../../../hooks/useProvinceFilter';

export default function EditInfoModal({
    candidate,
    onClose
}){
    const {t}=useTranslation();
    const [initialData, setInitialData]= useState(null);
    const [formData, setFormData] = useState(null);
    const isDirty = hasChanges(initialData,formData);
    const handleInputChange = (field) => (e) => {
        setFormData(prev => (
            {
                ...prev,
                [field]: e.target.value
            }
        ))
    }
    useEffect(()=>{
        const data ={
            fullName: candidate?.info.fullName || '',
            gender: candidate?.info.gender || '',
            dateOfBirth: candidate?.info.dateOfBirth || '',
            newHomeTown: candidate?.contact.newHomeTown || '',
            region: candidate?.contact.region || ''
        };
        setInitialData(data);
        setFormData(data)
    }, [candidate]);

    const {handleChangeNewHomeTown} = useProvinceFilter(formData, setFormData);
    return(
        <div className='modal-edit-card'>
            <div className='modal-edit-content info'>
                <div className='modal-edit-header'>
                    <div className='modal-edit-title'>
                    {t('modalEdit:editInformation')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        onClick={onClose}
                        className='btn-close-modal-edit'
                    />
                </div>

                <div className='modal-edit-divider'></div>

                <div className='modal-edit-middle'>
                    <Input
                        label={t('candidate:fullname')}
                        value={formData?.fullName}
                        onChange={handleInputChange('fullName')}
                        startIcon={<FaRegUser/>}
                        className='modal fullname'
                        variant='primary'
                    />
                    <Select
                        label={t('candidate:sex')}
                        value={formData?.gender}
                        onChange={(e)=>setFormData(prev => (
                            {
                                ...prev,
                                gender:e.target.value
                            }
                        ))}
                        options={[
                            {
                                value:'male',
                                label:`${t('candidate:male')}`
                            },
                            {
                                value:'female',
                                label:`${t('candidate:female')}`
                            },   
                        ]}
                        className={'select-modal gender'}
                        startIcon={<FaMars/>}
                        endIcon={<MdKeyboardArrowDown/>}
                        variant='primary'
                    />
                    <Input
                        label={t('candidate:dateOfBirth')}
                        value={formData?.dateOfBirth}
                        type='date'
                        onChange={(e)=>setFormData(prev =>(
                            {
                                ...prev,
                                dateOfBirth:e.target.value
                            }
                        ))}
                        startIcon={<BsFillCalendarDateFill/>}
                        className={'modal date-of-birth'}
                        variant='primary'
                    />
                    <Select
                        label={t('candidate:homeTown')}
                        value={formData?.newHomeTown}
                        onChange={(e)=>handleChangeNewHomeTown(e.target.value)}
                        options={buildProvince(t)}
                        className={'select-modal province'}
                        startIcon={<IoLocation/>}
                        endIcon={<MdKeyboardArrowDown/>}
                        variant='primary'
                    />
                    {/* <Input
                        label={t('search:region')}
                        value={formData?.region}
                        className='modal create-region'
                        disabled={true}
                    /> */}
                </div>

                <div className='modal-edit-bottom'>
                    <Button
                        label={t('common:cancel')}
                        variant='danger'
                        className='cancel-modal'
                        onClick={onClose}
                    />
                    <Button
                        label={t('common:save')}
                        variant='primary'
                        icon={<FaSave/>}
                        disabled={!isDirty}
                        className='save-modal'
                    />
                </div>
            
            </div>

        </div>

        
    )
}