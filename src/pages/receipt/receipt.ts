import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ProfileProvider } from "../../providers/profile/profile";
import { ShopInfo } from "../profile/profile.model";
import { UserModel } from "../../components/user/user.model";

/**
 * Generated class for the ReceiptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage {
  public user: UserModel = new UserModel();
  public receipt: any;
  public shop: ShopInfo = new ShopInfo();
  public loading: any;
  public dateToday = Date();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profilePVD: ProfileProvider,
    public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.receipt = this.navParams.get('orderToreceipt');
    console.log("receipt : " + JSON.stringify(this.receipt));
    this.user = this.user = JSON.parse(window.localStorage.getItem('user'));

    this.profilePVD.getshop(this.receipt.shop_id).then((data) => {
      this.shop = data;
      this.loading.dismiss();
      alert("Shop sussess : " + data);
    }).catch((err) => {
      this.loading.dismiss();
      alert("Cannot create receipt : " + err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiptPage');
  }

  gotohomefromreceipt() {
    this.navCtrl.push(HomePage)
  }
}
