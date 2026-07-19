// import { fakeCandidates } from "../data/fakeCandidates";
import axiosClient from "../../../api/axiosClient";

const delay = (ms) => new Promise((resolve)=>{
    setTimeout(resolve, ms);
});

export async function getCandidates({
    page = 1,
    pageSize = 10,
    search = '',
}){
    // await delay(2000);
    const {data} = 
        await axiosClient.get('/candidates',
            {
                params: {
                    page,
                    pageSize,
                    search:
                        search.trim() || undefined,
                },
            }
        );
    return data.data;       

    // const start = (page-1)*pageSize;
    // const end = start + pageSize;

    // const candidates = fakeCandidates.slice(start,end);

    // return{
    //     candidates,
    //     pagination: {
    //         page,
    //         pageSize,
    //         totalItem: fakeCandidates.length,
    //         totalPage: Math.ceil(
    //             fakeCandidates.length/pageSize
    //         ),
    //         hasNextPage: end < fakeCandidates.length,
    //         hasPreviousPage: page >1
    //     }
    // };
}

export async function getCandidateById(id){
    // await delay(2000);
    const {data} = 
        await axiosClient.get(`/candidates/${id}`);
        return data;
    // return fakeCandidates.find(
    //     candidate => String(candidate.id) === String(id)
    // )
}

export async function createCandidate(
    candidateData
){
    const {data} = await axiosClient.post('/candidates',
        candidateData
    );

    return data;
}

export async function deleteCandidateById(id){
    const response = await axiosClient.delete(`/candidates/${id}`);
    return response.data;
}