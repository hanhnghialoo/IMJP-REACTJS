import { fakeCandidates } from "../data/fakeCandidates";

export async function getCandidates({
    page = 1,
    pageSize = 5
}){
    const start = (page-1)*pageSize;
    const end = start + pageSize;

    const candidates = fakeCandidates.slice(start,end);

    return{
        candidates,
        pagination: {
            page,
            pageSize,
            totalItem: fakeCandidates.length,
            totalPage: Math.ceil(
                fakeCandidates.length/pageSize
            ),
            hasNextPage: end < fakeCandidates.length,
            hasPreviousPage: page >1
        }
    };
}

export async function getCandidateById(id){
    return fakeCandidates.find(
        candidate => String(candidate.id) === String(id)
    )
}