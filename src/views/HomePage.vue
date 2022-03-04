<template>
<div id="main-content">
    <header>
    <div class="container-fluid main-nav">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start align-items-center">
                    <a href="https://biletbayisi.com" class="navbar-brand float-left">
                    <img src="../assets/logo.svg" alt="BiletBayisi"></a>
                    <div class="divider d-none d-md-block d-lg-block d-xl-block"></div>
                    <div class="logo-text d-none d-md-block d-lg-block d-xl-block">
                        <h1 title="Bilet Bayisi" class="logo-text">Uçak Bileti - En Ucuz Uçak Biletleri</h1>
                    </div>
                </div>
                <div class="d-flex flex-column phone-container">
                    <span class="text d-none d-md-block">7/24 Uçak Bileti Hattı</span>
                    <a href="#" class="number d-none d-md-block">0850 302 99 35</a>
                    <div class="d-none d-md-block">
                        <div class="phone-icon-container">
                            <a href="tel:+908503029935" title="BiletBayisi Çağrı Merkezi Numarası">
                                <i data-material-icon="local_phone" class="material-icons"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="navbar" class="container-fluid">
        <div class="container">
            <nav class="navbar navbar-expand-md d-flex flex-wrap justify-content-between">
                <ul class="navbar-nav mr-auto p-0 m-0">
                    <li class="nav-item"><a href="https://biletbayisi.com/ucak-bileti" class="nav-link">Uçak Bileti</a></li>
                    <li class="nav-item"><a href="https://biletbayisi.com/ucak-bileti/yurtici" class="nav-link">Yurtiçi</a></li>
                    <li class="nav-item"><a href="https://biletbayisi.com/ucak-bileti/yurtdisi" class="nav-link">Yurtdışı</a></li>
                    <li class="nav-item"><a href="https://biletbayisi.com/ucak-bileti/online-check-in" class="nav-link">Check-in</a></li>
                    <li class="nav-item"><a href="https://biletbayisi.com/blog" class="nav-link">Blog</a></li>
                    <li class="nav-item"><a href="https://biletbayisi.com/iletisim" class="nav-link">İletişim</a></li>
                </ul>
                <ul class="navbar-nav ml-auto p-0 m-0">
                    <li class="nav-item" data-toggle="dropdown" aria-expanded="false">
                        <a href="#" class="nav-link d-flex align-items-center justify-content-center dropdown text-decoration-none" style="margin-top: -2px; position: relative;">
                            <i class="material-icons mr-1" style="display: inline-block;">account_circle</i>
                            <div class="dropdown-menu" style="width: 200px; left: -50%;">
                                <a href="/uyelik" class="dropdown-item">
                                <div class="dropdown-item-icon">
                                    <i class="material-icons" style="display: inline-block">info</i>
                                </div>
                                <div class="dropdown-item-content">
                                    <span>Veysel Can</span>
                                    <br>
                                    <small>BB Puanı:
                                        <strong style="color: rgb(1, 105, 208);">0 TL</strong>
                                    </small>
                                </div>
                                </a>
                                <a href="/uyelik" class="dropdown-item">
                                    <div class="dropdown-item-icon">
                                        <i class="material-icons" style="display: inline-block;">flight_takeoff</i>
                                    </div>
                                    <div class="dropdown-item-content">
                                        <span>Seyahatlerim</span>
                                    </div>
                                </a>
                                <a href="/uyelik" class="dropdown-item">
                                    <div class="dropdown-item-icon">
                                        <i class="material-icons" style="display: inline-block;">control_point_duplicate</i>
                                    </div>
                                    <div class="dropdown-item-content">
                                        <span>Puan Hareketlerim</span>
                                    </div>
                                </a>
                                <a href="/uyelik" class="dropdown-item">
                                    <div class="dropdown-item-icon">
                                        <i class="material-icons" style="display: inline-block;">settings</i>
                                    </div>
                                    <div class="dropdown-item-content">
                                        <span>Hesabımı Yönet</span>
                                    </div>
                                </a>
                                <a href="" class="dropdown-item">
                                    <div class="dropdown-item-icon">
                                        <i class="material-icons" style="display: inline-block;">highlight_off</i>
                                    </div>
                                    <div class="dropdown-item-content">
                                        <span>Çıkış</span>
                                    </div>
                                </a>
                            </div>
                            <span>Veysel</span>
                            <i class="material-icons" style="display: inline-block">keyboard_arrow_down</i>
                        </a>
                        
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </header>
    <div class="jumbotron-main">
        <div class="container">
            <h2 class="big-text">Türkiye’nin en ucuz uçak bileti sitesi!</h2>
            <p class="sub-text">"2020 Yılında 2.2 Milyon Kişi Bizimle Uçtu"</p>
            <div class="searchbox-container">
                <div id="searchbox-component" class="main-component">
                    <div>
                        <ul id="searchbox-tab" role="tablist" class="nav nav-tabs">
                            <li class="nav-item">
                                <a  @click="switchForm2()" id="li-flight-ticket" class="nav-link active">
                                    <span>Uçak Bileti</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a  @click="switchForm1()" id="li-rent-a-car" class="nav-link">
                                    <span>Araç Kiralama</span>
                                </a>
                            </li>
                        </ul>
                        <div id="searchbox-tab-content" class="tab-content">
                            <form id="form-flight-ticket" class="tab-pane active show">
                                <div class="searchbox-main">
                                    <div class="trip-type-row d-flex">
                                        <label>
                                            <input type="radio" value="ow" v-model="radio" @click="showLabel1">
                                            Tek Yön
                                        </label>
                                        <label>
                                            <input type="radio" value="rt" v-model="radio" @click="showLabel2">
                                            Gidiş - Dönüş
                                        </label>
                                    </div>
                                    <div class="row">
                                        <!-- where from start -->
                                        <div class="col col-sm-12 col-lg-6">
                                            <label class="input-container">
                                                <span class="origin">Nereden</span>
                                                <input type="text" data-input="origin" placeholder="Şehir yada havalimanı giriniz." 
                                                tabindex="1" name="origin" class="origin" id="originCS"
                                                />
                                            </label>
                                        </div>
                                        <!-- where from end -->
                                        <!-- to where start-->
                                        <div class="col col-sm-12 col-lg-6">
                                            <label class="input-container">
                                                <span class="destination">
                                                    <span class="destination-text">Nereye</span>
                                                </span>
                                                <input type="text" data-input="destination" placeholder="Şehir yada havalimanı giriniz." 
                                                tabindex="2" name="destination" class="destination" id="destinationCS" 
                                                />
                                            </label>
                                        </div>
                                        <!-- to where end -->
                                    </div>
                                    <div class="row">
                                        <div class="col col-sm-12 col-lg-6 d-flex flex-column">
                                            <!-- Departure date Start -->
                                            <label class="input-container" for="ow">
                                                <span class="datepicker-icon">Gidiş Tarihi</span>
                                                <input v-model="date" type="text" data-input="departure" name="departure-date" placeholder="Gidiş tarihini seçiniz." 
                                                 id="datepicker">                                            
                                            </label>
                                            <!-- Departure date End -->

                                            <!-- Return date Start -->
                                            <div id="div1" class="hide">
                                            <label class="input-container" for="rt">
                                                <span class="datepicker-icon">Dönüş Tarihi</span>
                                                <input type="text" data-input="return" name="return-date" placeholder="Dönüş tarihini seçiniz." 
                                                  id="datepicker2">
                                            </label>
                                            </div>
                                            <!-- Return date end -->
                                        </div>
                                        <div class="col col-sm-12 col-lg-6 d-flex flex-column">
                                            <div class="passangers-types row">
                                                <div class="col select-container d-flex flex-column text-center">
                                                    <label>
                                                        <span class="d-block">Yetişkin</span>
                                                        <select>
                                                            <option value="0">0</option>
                                                            <option value="0">1</option>
                                                            <option value="0">2</option>
                                                            <option value="0">3</option>
                                                            <option value="0">4</option>
                                                            <option value="0">5</option>
                                                            <option value="0">6</option>
                                                            <option value="0">7</option>
                                                        </select>
                                                    </label>
                                                    <span>(12+ yaş)</span>
                                                </div>
                                                <div class="col select-container d-flex flex-column text-center">
                                                    <label>
                                                        <span class="d-block">Çocuk</span>
                                                        <select>
                                                            <option value="0">0</option>
                                                            <option value="0">1</option>
                                                            <option value="0">2</option>
                                                            <option value="0">3</option>
                                                            <option value="0">4</option>
                                                            <option value="0">5</option>
                                                            <option value="0">6</option>
                                                            <option value="0">7</option>
                                                        </select>
                                                    </label>
                                                    <span>(2-12 yaş)</span>
                                                </div>
                                                <div class="col select-container d-flex flex-column text-center">
                                                    <label>
                                                        <span class="d-block">Bebek</span>
                                                        <select>
                                                            <option value="0">0</option>
                                                            <option value="0">1</option>
                                                            <option value="0">2</option>
                                                            <option value="0">3</option>
                                                            <option value="0">4</option>
                                                            <option value="0">5</option>
                                                            <option value="0">6</option>
                                                            <option value="0">7</option>
                                                        </select>
                                                    </label>
                                                    <span>(0-2 yaş)</span>
                                                </div>
                                                <div class="col select-container d-flex flex-column text-center">
                                                    <label>
                                                        <span class="d-block">Öğrenci</span>
                                                        <select>
                                                            <option value="0">0</option>
                                                            <option value="0">1</option>
                                                            <option value="0">2</option>
                                                            <option value="0">3</option>
                                                            <option value="0">4</option>
                                                            <option value="0">5</option>
                                                            <option value="0">6</option>
                                                            <option value="0">7</option>
                                                        </select>
                                                    </label>
                                                    <span>(12-24 yaş)</span>
                                                </div>
                                            </div>
                                            <button type="sumbit" class="btn btn-block btn-success submit d-flex align-items-center justify-content-between text-center mt-4">
                                                <span></span>
                                                <span>UÇUŞ ARA</span>
                                                <i class="material-icons">
                                                    flight
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form id="form-rent-a-car" class="tab-pane">
                                <div class="searchbox-main">
                                    <p>BU ARAÇ KİRALAMA FORMUDUR.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jumbotron-people">
        <div class="counter">
            <div class="count">93.000.323</div>
            <div class="text">2020 YILI MUTLU ZİYARETÇİ SAYISI</div>
        </div>
        <div class="fly-line"></div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  data:function(){
return{
      searchAP:"",
      searchAP2:"",
      radio: "ow",
      date:"",
      toggle:false,
  }
  },
  methods:{
      onSearchAirport:function(){
          console.log(this.searchAp)
          
        },
        showLabel1:function(){
            document.getElementById('div1').style.display ='none';
        },
        showLabel2:function(){
            document.getElementById('div1').style.display = 'block';
        },
        switchForm1:function(){
            document.getElementById('form-flight-ticket').style.display = 'none';
            document.getElementById('li-flight-ticket').classList.remove("active");
            document.getElementById('form-rent-a-car').style.display = 'block';
            document.getElementById('li-rent-a-car').classList.add("active");


        },
        switchForm2:function(){
            document.getElementById('form-flight-ticket').style.display = 'block';
            document.getElementById('li-flight-ticket').classList.add("active");
            document.getElementById('form-rent-a-car').style.display = 'none';
            document.getElementById('li-rent-a-car').classList.remove("active");

        }
      

      
  },
}
</script>

<style>
.hide {
  display: none;
}
body {
    margin: 0;
    font-family: Open Sans,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3a3a32;
    text-align: left;
    background-color: #fff;
}
#main-content {
    flex: 1;
}

/* Navbar START*/


.navbar {
    position: relative;
    padding: .5rem 1rem;
}
header #navbar {
    background: #fff;
}
header #navbar .container {
    padding: 0;
    min-height: inherit;
}
header #navbar .container nav.navbar {
    padding-bottom: 0;
    padding-top: 5px;
}

header #navbar .container nav.navbar .nav-item .nav-link {
    padding: .563rem .75rem .562rem;
    border-bottom: 3px solid transparent;
    color: #585d5f;
}
.dropdown-menu .dropdown-item-icon {
    padding: .75rem 1rem .4rem .5rem;
}
.dropdown-menu .dropdown-item-content {
    padding: .75rem .5rem .75rem 0;
    flex-grow: 1;
    border-bottom: 1px solid #ddd;
}
.dropdown-menu.show {
    display: block;
}
.dropdown-menu .dropdown-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 8px;
    width: 100%;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 85%;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    width: 100%;
    padding: 0;
    margin: 1px 0 0;
    font-size: .875rem;
    color: #3a3a32;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 0 solid rgba(0,0,0,.15);
    border-radius: .125rem;
    box-shadow: 0 0 14px 0 rgb(0 0 0 / 12%), 0 14px 14px 0 rgb(0 0 0 / 20%);
}
/* Navbar END*/

header .main-nav {
    border-bottom: 1.3px solid #ddd;
    background-color: #f5f5f9;
}
header .container-fluid .container, header .container-lg .container, header .container-md .container, header .container-sm .container, header .container-xl .container {
    min-height: 58px;
}
header .container-fluid .container .divider, header .container-lg .container .divider, header .container-md .container .divider, header .container-sm .container .divider, header .container-xl .container .divider {
    border-right: 1px solid #ddd;
    margin-right: 10px;
    height: 40px;
}
header .container-fluid .container .logo-text, header .container-lg .container .logo-text, header .container-md .container .logo-text, header .container-sm .container .logo-text, header .container-xl .container .logo-text {
    font-size: .825rem;
    font-weight: 400;
    margin: 0;
}
header .container-fluid .container .phone-container .text, header .container-lg .container .phone-container .text, header .container-md .container .phone-container .text, header .container-sm .container .phone-container .text, header .container-xl .container .phone-container .text {
    font-weight: 400;
    font-size: .75rem;
    margin-top: 3px;
}
header .container-fluid .container .phone-container .number, header .container-lg .container .phone-container .number, header .container-md .container .phone-container .number, header .container-sm .container .phone-container .number, header .container-xl .container .phone-container .number {
    color: #696969;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: .03rem;
}
/* Searchbox start*/

.jumbotron-main .searchbox-container {
    position: absolute;
    bottom: -35px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    z-index: 2;
}
#searchbox-component.main-component {
    margin: 0 auto;
    background: #fff;
    width: 920px;
    max-width: 90%;
    min-height: 270px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px 0 #c5ccc5;
}
#searchbox-component .nav-tabs .nav-link {
    border: none;
    border-bottom: 2px solid transparent;
    color: #939d9a;
    white-space: nowrap;
}
#searchbox-component .nav-tabs .nav-link.active span {
    font-weight: 700;
    border-bottom: 2px solid #2dc44d;
    color: #53605e;
}
#searchbox-component .nav-tabs .nav-link span {
    padding: .5rem 0;
}
#searchbox-component.main-component .tab-content {
    padding: 10px 20px;
}

#searchbox-component .tab-content .searchbox-main .trip-type-row label {
    margin-right: 10px;
}
#searchbox-component .tab-content .searchbox-main .input-container {
    justify-content: space-between!important;
    display: flex;
    margin-bottom: 15px;
}

#searchbox-component .tab-content .searchbox-main .input-container span.origin {
    background-image: url("../assets/origin-white.svg");
}

#searchbox-component .tab-content .searchbox-main .input-container span {
    background: #a1a1a1 no-repeat left .5rem center;
    background-size: 1.125rem;
    width: 160px;
    color: #fff;
    line-height: 46px;
    height: 46px;
    transition: width .3s;
    border: 1px solid #a2a2a2;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-weight: 600;
    margin: 0;
    padding-left: 30px;
}
#searchbox-component .tab-content .searchbox-main .input-container input, #searchbox-component .tab-content .searchbox-main .input-container select {
    width: 100%;
    color: #757575;
    padding-left: 15px;
    padding-right: 15px;
    background: #f0f0f0;
    border: 1px solid #a2a2a2;
}

#searchbox-component .tab-content .searchbox-main .input-container span.destination {
    background-image: url("../assets/destination-white.svg");
}
#searchbox-component .tab-content .searchbox-main .input-container span.destination-text {
    padding-left: 0;
}
#searchbox-component .tab-content .searchbox-main .input-container span.datepicker-icon {
    background-image: url("../assets/datepicker-white.svg");
    cursor: pointer;
}
#searchbox-component .tab-content .searchbox-main .select-container label select {
    width: 100%;
    border: 0;
    color: #757575;
    font-size: .95rem;
    font-weight: 400;
    -moz-text-align-last: center;
    text-align-last: center;
    cursor: pointer;
}
#searchbox-component .tab-content .searchbox-main .select-container label {
    background: #f0f0f0;
    border: 1px solid #a2a2a2;
    border-radius: 3px;
}
#searchbox-component .tab-content .searchbox-main .select-container label span {
    background: #a1a1a1;
    font-size: 12px;
    color: #fff;
    height: 21px;
    line-height: 21px;
    text-align: center;
}
#searchbox-component .tab-content .searchbox-main .select-container span {
    font-size: 12px;
}
#searchbox-component .tab-content button.submit {
    background-color: #8acc04;
    line-height: 40px;
    border: 0;
    outline: 0;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 30%);
}
.btn-success {
    color: #fff;
    background-color: #7cb900;
    border-color: #7cb900;
}

/* Searchbox end */

/* Jumbotron-Main start*/
.jumbotron-main{
    position: relative;
    padding-top: 3rem;
    padding-bottom: 1rem;
    min-height: 465px;
    background-image: url("../assets/homepage.jpg");
    background-size: cover;
    background-position: 50%;
}
.jumbotron-main .big-text {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 700;
}

.jumbotron-main .sub-text {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 300;
    margin-top: 20px;
}

/* Jumbotron-Main END*/

/* Jumbotron-People Start */
.jumbotron-people{
    background: url("../assets/happy-people.jpg") 50% no-repeat;
    background-size: cover;
    height: 236px;
    position: relative;
}
.jumbotron-people .fly-line{ 
    position: absolute;
    bottom: 0;
    background: url("../assets/flyline3.png") 50% no-repeat;
    width: 100%;
    height: 207px;
}
.jumbotron-people .counter {
    text-align: center;
    color: #fff;
    padding-top: 65px;
    font-weight: 700;
}
.jumbotron-people .counter .count {
    line-height: 85px;
    vertical-align: middle;
    -webkit-animation: happyCounter 5s;
    animation: happyCounter 5s;
    font-size: 60px;
}
/* Jumbotron-People End */
</style>