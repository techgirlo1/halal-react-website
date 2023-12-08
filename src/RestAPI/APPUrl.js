

class APPUrl {
  
  static BaseURL ='http://127.0.0.1:8000/api';
  static Aboutdesc = this.BaseURL + '/aboutdesc';
  static About = this.BaseURL + '/about';
  static Producthome = this.BaseURL + '/producthome/';
  static  allProduct= this.BaseURL + '/productall';
  static  Productdetails= this.BaseURL + '/productdetails/';
  static Services = this.BaseURL + '/allservices';
  static Footer = this.BaseURL + '/footer';
  static ContactUs = this.BaseURL + '/contact_us';
  static AddToCart = this.BaseURL + '/addtocart';
  
  static Visitor=this.BaseURL + '/getvisitor';
  static Register=this.BaseURL + '/signup';
  static Login=this.BaseURL + '/login';
  static Forget=this.BaseURL + '/password/email';
  static Reset=this.BaseURL + '/password/reset';
  static Logout=this.BaseURL + '/logout';
  static User=this.BaseURL + '/user';
  static CartOrder=this.BaseURL + '/cartorder';

  static CartCount(id){
    return this.BaseURL + '/cartcount/' + id;
}

static Search(search){
  return this.BaseURL + '/search/' + search;
}
  static Cartlist(email){
    return this.BaseURL + '/cartlist/' + email;
  }

  static removeCartlist(id){
    return this.BaseURL + '/removecartlist/' + id;
  }


  static cartItemPlus(id){
    return this.BaseURL + '/cartitemplus/' + id;
  }
  
  static cartItemMinus(id){
    return this.BaseURL + '/cartitemminus/' + id;
  }
  
  static Orderlist(email, order_status) {
    return this.BaseURL + '/orderlist/' + email + '/' + order_status;
}
  
}

export default APPUrl;
