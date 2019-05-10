/**
 * Created by b16552 on 5/9/2019.
 */
import {Injectable} from "@angular/core";

declare let toastr:any

@Injectable()
export class ToastrService{

    success(message:string, title?: string){
        toastr.success(message,title)
    }

    info(message: string, title?: string) {
        toastr.info(message, title)
    }

    warning(message: string, title?: string) {
        toastr.warning(message, title)
    }

    error(message: string, title?: string) {
        toastr.error(message, title)
    }
}