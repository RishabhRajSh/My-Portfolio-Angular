import { Component } from '@angular/core';


@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],

})
export class ExpertiseComponent {
  figma : string = '../../../assets/icon/IconFigma.svg';
  adobeXD : string = '../../../assets/icon/IconAdobeXd.svg';
  framer : string = '../../../assets/icon/IconFramer.svg';
  photoshop : string = '../../../assets/icon/IconAdobePhotoshop.svg' ;
  illustrator : string = '../../../assets/icon/IconAdobeIllustrator.svg';
  canva : string = '../../../assets/icon/IconCanva.svg';
  html : string = '../../../assets/icon/IconHtml.svg';
  css : string = '../../../assets/icon/IconCss.svg';
  webflow : string = '../../../assets/icon/IconWebflow.svg';
  angular : string = '../../../assets/icon/IconAngularJs.svg';
  react : string = '../../../assets/icon/IconReactJs.svg';
  typescript : string = '../../../assets/icon/IconTypeScript.svg';


  uiuxcontents: any[] =  [this.figma, this.adobeXD, this.framer]
  graphiccontents: any[] =  [this.photoshop, this.illustrator, this.canva]
  webdesingingcontents: any[] =  [this.html, this.css, this.webflow]
  frontendcontents: any[] =  [this.angular, this.react, this.typescript]
}
