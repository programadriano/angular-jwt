import { Injectable } from '@angular/core';
import swal from 'sweetalert2';



export interface IAlertService {
    success(title: string, textMessage: string, textbutton: string);
    error(title: string, textMessage: string, textbutton: string);
    warning(title: string, textMessage: string, textbutton: string);
    info(title: string, textMessage: string, textbutton: string);
    question(title: string, textMessage: string, textbutton: string);
}




@Injectable()
export class AlertService implements IAlertService {

    success(title: string, textMessage: string, textbutton: string) {
        return swal({
            title: title,
            text: textMessage,
            type: 'success',
            confirmButtonText: textbutton
        })
    }

    error(title: string, textMessage: string, textbutton: string) {
        return swal({
            title: title,
            text: textMessage,
            type: 'error',
            confirmButtonText: textbutton
        })
    }

    warning(title: string, textMessage: string, textbutton: string) {
        return swal({
            title: title,
            text: textMessage,
            type: 'warning',
            confirmButtonText: textbutton
        })
    }

    info(title: string, textMessage: string, textbutton: string) {
        return swal({
            title: title,
            text: textMessage,
            type: 'info',
            confirmButtonText: textbutton
        })
    }

    question(title: string, textMessage: string, textbutton: string) {
        return swal({
            title: title,
            text: textMessage,
            type: 'question',
            confirmButtonText: textbutton
        })
    }
}


