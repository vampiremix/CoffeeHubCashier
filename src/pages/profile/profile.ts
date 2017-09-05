import { ProfileProvider } from '../../providers/profile/profile';
import { ShopInfo } from './profile.model';
import { UserModel } from '../../components/user/user.model';
import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: UserModel = new UserModel();
  shop: ShopInfo = new ShopInfo();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private profilePVD: ProfileProvider, public loadingCtrl: LoadingController) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.getShopInfo(this.user.shop_id);
    console.log("Profile get user : " + JSON.stringify(this.user));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

  }
  getShopInfo(shopID) {
    const loading = this.loadingCtrl.create({
    });
    loading.present();
    this.profilePVD.getshop(shopID).then((data) => {
      this.shop = data;
      loading.dismiss();
      console.log("Log Profile : " + JSON.stringify(data));
    }).catch((err) => {
      alert("Cannot get shop detail : " + shopID);
      loading.dismiss();
    })
  }
}
