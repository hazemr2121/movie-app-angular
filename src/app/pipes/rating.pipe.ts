import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'ratingCircle',
})
export class RatingCirclePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  // AI was used in the making of this pipe :3

  transform(rating: number): SafeHtml {
    const percentage = Math.round((rating / 10) * 100);
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    let color = '#ff0000';
    if (rating >= 7) {
      color = '#00ff00';
    } else if (rating >= 4) {
      color = '#ffa500';
    }

    const svg = `
      <svg width="50" height="50" style="background-color:rgb(0, 0, 0)" class=" rounded-circle"  viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="${radius}" stroke="#ddd" stroke-width="5" fill="none"></circle>
        <circle cx="25" cy="25" r="${radius}" stroke="${color}" stroke-width="5"
          fill="none" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
          transform="rotate(-90 25 25)"></circle>
        <text x="50%" y="50%"  text-anchor="middle" dy=".3em" font-size="12px" fill="white" font-weight="bold">${percentage}%</text>
      </svg>
    `;

    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
