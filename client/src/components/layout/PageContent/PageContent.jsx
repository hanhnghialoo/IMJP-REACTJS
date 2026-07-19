import './PageContent.css';

import CandidateToolbar from './CandidateToolbar/CandidateToolbar';
import PageHeader from './PageHeader/PageHeader';
import CandidateRow from './CandidateTabble/CandidateRow/CandidateRow';
import CandidateHeader from './CandidateTabble/CandidateHeader/CandidateHeader';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useCandidates } from '../../../features/candidate/hook/useCandidates';
import { useCandidateExpandedRow } from './CandidateTabble/CandidateExpandedRow/hook/useCandidateExpandedRow';
import { Fragment } from 'react';

import CandidateExpandedRow from './CandidateTabble/CandidateExpandedRow/CandidateExpandedRow';
import CandidatePagination from './Pagination/CandidatePagination';
import CreatCandidateModal from '../../../features/candidate/modal/CreateCandidateModal/CreateCandidateModal';
import SearchCandidateModal from '../../../features/candidate/modal/SearchCandidateModal/SearchCandidateModal';
import QuickFilter from './CandidateToolbar/QuickFilter/QuickFilter';
import Loading from '../../common/Loading/Loading';
import useDebounce from '../../../hooks/useDebounce';

function PageContent () {
    const {t} = useTranslation();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
    const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpenQuickFilter, setIsOpenQuickFilter] = useState(false);
    const inputNameRef = useRef(null);
    const debouncedSearchQuery = useDebounce(
        searchQuery,
        400
    );

    function handleChangeSearchQuery (query){
        setSearchQuery(query);
        setPage(1);
    };

    const {
        expandedCell,
        toggleExpand,
        isExpandedRow,
        isExpanded
    } = useCandidateExpandedRow();

    const {
        candidates,
        pagination,
        loading,
        error,
        loadCandidates
    } = useCandidates();

    useEffect(()=>{
        inputNameRef.current?.focus()
    },[isOpenCreateModal])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpenCreateModal(false);
                setIsOpenSearchModal(false)
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(()=>{
        loadCandidates(
            page,
            pageSize,
            debouncedSearchQuery.trim(),
        );
    }, [
        page, 
        pageSize,
        debouncedSearchQuery,
        // loadCandidates,
    ]);
    
    const handleCandidateCreated = () => {
        if (page === 1){
            loadCandidates(1, pageSize);
            return;
        }
        setPage(1);
    }

    return(
        <div className='page-body'>
            <div className='page-content'>

                <div className='page-content-header'>
                    <PageHeader/>
                    <CandidateToolbar
                        onCreateCandidate={()=>setIsOpenCreateModal(true)}
                        onSearchCandidate={()=>setIsOpenSearchModal(true)}
                        handleChangeSearchQuery={handleChangeSearchQuery}
                        searchQuery={searchQuery}
                        onOpenQuickFilter={()=>setIsOpenQuickFilter(prev=>!prev)}
                        isOpenQuickFilter={isOpenQuickFilter}
                    />
                </div>
                {isOpenQuickFilter && 
                    <QuickFilter
                        onHideQuickFilter={()=>setIsOpenQuickFilter(false)}
                    />}

                <div className='candidate-table'>
                    <CandidateHeader/>
                    <div className='candidate-divider-row'>
                        <div className='candidate-divider'></div>
                    </div>
                    
                    {loading && (
                        <Loading
                            variant='spinner'
                            size='large'
                            message={t('common:loading')}
                        />
                    )}

                    {!loading && !error &&
                        candidates.map((candidate,index)=> ( 
                            <Fragment key={candidate.id}>
                                <CandidateRow
                                    candidate={candidate}
                                    onExpand={toggleExpand}
                                    isExpanded={isExpanded}
                                    isExpandedRow={isExpandedRow(candidate.id)}
                                    no={(pagination.page-1)*pagination.pageSize+index+1}
                                />

                                {isExpandedRow(candidate.id) && (
                                    <CandidateExpandedRow
                                        candidate={candidate}
                                        field={expandedCell?.field}
                                    />
                                )}

                            </Fragment>         
                        )) 
                    }                                
                </div>

                <CandidatePagination
                    candidate={candidates}
                    pagination={pagination}
                    pageSize={pageSize}
                    onPageChange={setPage}
                    onPageSizeChange={(size)=>{
                        setPageSize(size);
                        setPage(1)
                    }}
                />

            </div>
            {isOpenCreateModal &&
                <CreatCandidateModal
                    onCloseCreateCandidate={()=>setIsOpenCreateModal(false)}
                    inputNameRef={inputNameRef}
                    onCreated={handleCandidateCreated}
                />
            }

            {isOpenSearchModal && 
                <SearchCandidateModal
                    onCloseSearchCandidate={()=> setIsOpenSearchModal(false)}
                />
            }
        </div>
    )
}

export default PageContent;