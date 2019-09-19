/**
 * Created by b16552 on 8/14/2019.
 */
export interface ISprint{
    uid: number,
    id: string,
    title: string,
    category: string,
    reason: string,
    sprintrollovers: number,
    initsize: number,
    actsize: number,
    date?:Date
}