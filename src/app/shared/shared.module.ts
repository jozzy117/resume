import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { ButtonUiComponent } from './component/button-ui/button-ui.component';
import { FancyHeaderComponent } from './component/fancy-header/fancy-header.component';



@NgModule({
  declarations: [
    NavComponent,
    AboutUsComponent,
    PortfolioComponent,
    ExperienceComponent,
    ContactComponent,
    IntroComponent,
    ButtonUiComponent,
    FancyHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    AboutUsComponent,
    PortfolioComponent,
    ExperienceComponent,
    ContactComponent,
    IntroComponent,
    ButtonUiComponent,
    FancyHeaderComponent
  ]
})
export class SharedModule { }
