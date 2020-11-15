import {MatTooltip} from '@angular/material/tooltip';

export class MatUtils {
  static showToolTip(tooltip: MatTooltip, duration: number) {
    tooltip.disabled = false;
    tooltip.show();
    setTimeout(() => {
      tooltip.disabled = true;
      tooltip.message = '';
    }, duration);
  }
}
