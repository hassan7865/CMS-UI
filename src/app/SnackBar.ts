import { CreatedComponent } from "./SnackBars/created/created.component";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

const horizontalPosition: MatSnackBarHorizontalPosition = 'end';
const verticalPosition: MatSnackBarVerticalPosition = 'top';

export function openSnackBar(snackBar: MatSnackBar,message:any,text:any) {
    snackBar.openFromComponent(CreatedComponent, {
      duration: 5000,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      data:{
        message:message,
        text:text
      }
    });
}
