import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnInit} from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router,ActivatedRoute } from '@angular/router/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  mobileQuery: MediaQueryList;

  menuList=['dashboard','logout']

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public loginService:AuthenticationService, public router:Router,public route: ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public onMenuClick(item:String)
  {
    //if(item==='dashboard')
    //{
      //this.router.navigate([`../${item}`],{ replaceUrl: true , relativeTo : this.route})
      //this.router.navigate([`../${item}`])
      console.log(`${item}`)
      if(item==='logout'){
      this.loginService.logout()
      console.log(this.router.navigateByUrl('/login'),{ replaceUrl: true})
      return
      }
      console.log(this.router.navigateByUrl(`/home/${item}`))

      
  }
}
