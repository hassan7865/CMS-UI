import { ToastComponent } from "./SnackBars/toast/toast.component";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

const horizontalPosition: MatSnackBarHorizontalPosition = 'end';
const verticalPosition: MatSnackBarVerticalPosition = 'top';

export function openSnackBar(snackBar: MatSnackBar,message:any,text:any,type:string) {
    snackBar.openFromComponent(ToastComponent, {
      duration: 5000,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      data:{
        message:message,
        text:text,
        type:type
      }
    });
}
