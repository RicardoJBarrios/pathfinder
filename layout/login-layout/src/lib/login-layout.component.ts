import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginLayoutComponent {}
