import Button from '../../../common/Button/Button';
import TextButton from '../../../common/Button/TextButton';
import './UserPagination.css';
import { useTranslation } from 'react-i18next';

import { MdKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


export default function UserPagination({
    users,
    pagination,
    onPageChange
}){
    const {t} = useTranslation();
    if (!pagination){
        return null;
    }
    const {
        page,
        totalPage,
        totalItem,
        hasNextPage,
        hasPreviousPage
    } = pagination
    return(
        <div className='candidate-pagination'>
            <span className='pagination-total'>
                {t('common:show')} {users.length} / {pagination?.totalItem} {t('common:users')}
            </span>
            <div className='candidate-pagination-controls'>
                <TextButton
                    disabled={!hasPreviousPage}
                    onClick={()=> onPageChange(
                        {
                            page: page-1
                        }
                    )}
                    label={t('common:previousPage')}
                    className='text-btn-previous'
                    icon={<MdKeyboardDoubleArrowLeft className='icon-previous-pagination'/>}
                />
                <Button
                    className={page === 1 ? 'btn-pagination-active': 'btn-pagination-non'}
                    onClick={()=> onPageChange({page:1})}
                    label='1'
                />

                {page > 3 && (
                    <span className='pagination-ellipsis'>...</span>
                )}

                {page > 2 && (
                    <Button
                        onClick={()=> onPageChange({page:page-1})}
                        label={page-1}
                        className='btn-pagination-non'
                    />
                )}

                {page !== 1 && page !== totalPage && (
                    <Button
                        className='btn-pagination-active'
                        label={page}
                    />
                )}

                {page < totalPage-1 && (
                    <Button
                        onClick={()=>onPageChange({page:page+1})}
                        label={page+1}
                        className='btn-pagination-non'
                    />
                )}

                {page< totalPage-2 &&(
                    <span className='pagination-ellipsis'>...</span>
                )}

                {totalPage>1 && (
                    <Button
                        className={page === totalPage ? 'btn-pagination-active' : 'btn-pagination-non'}
                        onClick={()=>onPageChange({
                            page: totalPage
                        })}
                        label={totalPage}
                    />
                )}

                <TextButton
                    disabled={!hasNextPage}
                    onClick={()=> onPageChange(
                        {
                            page: page+1
                        }
                    )}
                    label={t('common:nextPage')}
                    className='text-btn-next'
                    icon={<MdOutlineKeyboardDoubleArrowRight className='icon-next-pagination'/>}
                />
            </div>

        </div>
    )
}