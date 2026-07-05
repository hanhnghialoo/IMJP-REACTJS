import './CandidatePagination.css';

import { useTranslation } from 'react-i18next';
import Button from '../../../common/Button/Button';
import TextButton from '../../../common/Button/TextButton';

import { MdKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function CandidatePagination({
    candidate,
    pagination,
    onPageChange,
    pageSize,
    onPageSizeChange
}){
    const {t} = useTranslation('common');
    if (!pagination){
        return null;
    }
    const {
        page,
        totalPage,
        totalItem,
        hasNextPage,
        hasPreviousPage
    } = pagination;
    

    return(
        <div className='candidate-pagination'>
            {/* <span className='pagination-total'>
                {t('common:show')} {candidate.length} / {pagination?.totalItem} {t('common:candidate')}
            </span> */}
            <div className="pagination-total">
                    <span>{t('common:show')}</span>
                        <select
                            className='select-candidate-show-page'
                            value={pageSize}
                            onChange={(e)=>{
                                onPageSizeChange(Number(e.target.value))
                            }}
                        >
                            <option value={10}>10 {t('common:candidate')}</option>
                            <option value={15}>15 {t('common:candidate')}</option>
                            <option value={25}>25 {t('common:candidate')}</option>
                            <option value={35}>35 {t('common:candidate')}</option>
                        </select>
                    <span>/ {t('common:page')}</span>
                    <span> --- {t('common:total')} {pagination?.totalItem} {t('common:candidate')}</span>
            </div>

            <div className="candidate-pagination-controls">
                <TextButton
                    disabled={!hasPreviousPage}
                    onClick={()=> onPageChange(
                            page-1
                    )}
                    label={t('common:previousPage')}
                    className='text-btn-previous'
                    icon={<MdKeyboardDoubleArrowLeft className='icon-previous-pagination'/>}
                    
                />
                <Button
                    className={page === 1 ? 'btn-pagination-active': 'btn-pagination-non'}
                    onClick={()=> onPageChange(1)}
                    label='1'
                />

                {page > 3 && (
                    <span className='pagination-ellipsis'>...</span>
                )}

                {page > 2 && (
                    <Button
                        onClick={()=> onPageChange(page-1)}
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
                        onClick={()=>onPageChange(page+1)}
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
                        onClick={()=>onPageChange(
                            totalPage
                        )}
                        label={totalPage}
                    />
                )}

                <TextButton
                    disabled={!hasNextPage}
                    onClick={()=> onPageChange(
                            page+1
                    )}
                    label={t('common:nextPage')}
                    className='text-btn-next'
                    icon={<MdOutlineKeyboardDoubleArrowRight className='icon-next-pagination'/>}
                />
            </div>

        </div>
    )
}

export default CandidatePagination;