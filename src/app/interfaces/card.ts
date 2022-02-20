export interface Card {
    arrhythmias: string[],
    created_date: string,
    id: number,
    patient_name: string,
    status: string, // 'PENDING', 'DONE', 'REJECTED'
}