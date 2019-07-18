/**
 * Created by b16552 on 7/18/2019.
 */

export interface ISprint{
    uid: number,
    id: string,
    title: string,
    category: string,
    reason: string,
    sprintrollovers: number,
    aaplication?: string
    initsize: number,
    actsize: number
}