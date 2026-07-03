import './EditContactModal.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import hasChanges from '../../../../../utils/Modal/hasChanges';
import { formatPhoneNumber } from '../../../../../utils/formatPhoneNumber';
import { PROVINCE_NEW } from '../../../../../features/timeline/constants/province/provinceNew';
import { getOldProvince } from '../../../../../features/timeline/utils/provinceHelper';
import { buildProvince } from '../../../../../features/timeline/utils/buildProvince';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import Select from '../../../../common/Select/Select';

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

export default function EditContactModal({
    candidate,
    onClose
}){
    const {t} = useTranslation();
    const [initialData, setInitialData]= useState(null);
    const [formData, setFormData] = useState(null);
    const [provinceOldList, setProvinceOldList]= useState([]);

    const isDirty = hasChanges(initialData,formData);
    const handleInputChange = (field) => (e) => {
        setFormData(prev => (
            {
                ...prev,
                [field]: e.target.value
            }
        ))
    }
    
    const oldProvinceOptions = useMemo(() => {
        return [
            {
                value: '',
                label: t('modalEdit:selectProvince')
            },
            ...provinceOldList.map(province => ({
                value: province,
                label: province,
            }))
        ];
    }, [provinceOldList, t]);

    useEffect(()=>{
        const data ={
            phone: candidate?.contact.phone || '',
            newHomeTown: candidate?.contact.newHomeTown || '',
            oldHomeTown: candidate?.contact.oldHomeTown || '',
            email: candidate?.contact.email || '',
            address: candidate?.contact.address || '',
            familyMember: candidate?.contact.familyMember || '',
            familyMemberPhone: candidate?.contact.familyMemberPhone || '',
        };
        setInitialData(data);
        setFormData(data);
        if (data.newHomeTown) {
            setProvinceOldList(
                getOldProvince(data.newHomeTown)
            );
        }
    }, [candidate])
    const handleProvinceChange = (e) => {
        setFormData(prev => (
            {
                ...prev,
                newHomeTown:e.target.value,
                oldHomeTown:'',
            }
        ))
        setProvinceOldList(
            getOldProvince(e.target.value)
        );
    }
    return(
        <div className='modal-edit-card'>
            <div className='modal-edit-content contact'>
                
                <div className='modal-edit-header'>
                        <div className='modal-edit-title'>
                        {t('modalEdit:editContact')}
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
                        label={t('candidate:phoneNumber')}
                        value={`${formatPhoneNumber(formData?.phone)}`}
                        onChange={handleInputChange('phone')}
                        startIcon={<FaPhoneAlt/>}
                        className='modal phone'
                        variant='primary'
                    />
                    <Select
                        label={t('candidate:province')}
                        value={formData?.newHomeTown}
                        options={buildProvince(t)}
                        onChange={handleProvinceChange}
                        className={'select-modal province'}
                        startIcon={<IoLocation/>}
                        endIcon={<MdKeyboardArrowDown/>}
                        variant='primary'
                    />
                    <Select
                        label={t('candidate:oldProvince')}
                        value={formData?.oldHomeTown}
                        options={oldProvinceOptions}
                        className={'select-modal province'}
                        startIcon={<IoLocation/>}
                        endIcon={<MdKeyboardArrowDown/>}
                        variant='primary'
                        onChange={(e)=>
                            setFormData(prev => ({
                                ...prev,
                                oldHomeTown: e.target.value,
                            }))
                        }
                    />
                    <Input
                        label={t('candidate:address')}
                        value={formData?.address}
                        onChange={handleInputChange('address')}
                        startIcon={<FaMapMarkerAlt/>}
                        className='modal address'
                        variant='primary'
                    />
                    <Input
                        label={t('candidate:email')}
                        value={formData?.email}
                        onChange={handleInputChange('email')}
                        startIcon={<IoIosMail/>}
                        className='modal email'
                        variant='primary'
                    />
                    <Input
                        label={t('candidate:familyMember')}
                        value={formData?.familyMember}
                        onChange={handleInputChange('familyMember')}
                        startIcon={<BsFillPeopleFill/>}
                        className='modal family-member'
                        variant='primary'
                    />
                    <Input
                        label={t('candidate:contact')}
                        value={formatPhoneNumber(formData?.familyMemberPhone)}
                        onChange={handleInputChange('familyMemberPhone')}
                        startIcon={<FaPhoneAlt/>}
                        className='modal family-member-phone'
                        variant='primary'
                    />
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