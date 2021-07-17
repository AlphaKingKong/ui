import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


export enum SnackBarType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}

@Injectable()
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}
  open(
    message: string,
    messageType: SnackBarType,
    action = 'Close',
    duration: number = 5000
  ): void {
    const config = new MatSnackBarConfig();
    config.duration = duration;
    config.verticalPosition = 'bottom' ;
    config.horizontalPosition = 'right' ;
    switch (messageType) {
      case SnackBarType.Success:
        config.panelClass = ['snack-bar', 'success'];
        break;
      case SnackBarType.Info:
        config.panelClass = ['snack-bar', 'info'];
        break;
      case SnackBarType.Warning:
        config.panelClass = ['snack-bar', 'warn'];
        break;
      case SnackBarType.Error:
        config.panelClass = ['snack-bar', 'error'];
        break;
      default:
        config.panelClass = ['snack-bar', 'info'];
    }
    this.snackBar.open(message, action, config);
  }
}
