const puppeteer = require('puppeteer');

(async () => {

//   musinsa = () =>{
//   await page.goto('https://wing.coupang.com/tenants/sfl-portal/delivery/management');
//   // await page.screenshot({ path: 'example.png' });
//   await page.type('#userID', 'okidoki');
//   await page.type('#userPWD', 'q!77007700');
//   await page.click('#btnLogin');
//   await page.waitForNavigation(); // <------------------------- Wait for Navigation
//   console.log('New Page URL:', page.url());
//   await page.screenshot({ path: 'example.png' });
// }

  async function login(target,idselector,pwselector,clickSelector,id,url){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    // await page.screenshot({ path: 'example.png' });
    await page.type(idselector, id);
    if (target=='서울스토어'){
      await page.type('input[name="supplier_user_login_id"]', 'admin');
    }
    await page.type(pwselector, 'q!77007700');
    if(target =='musinsa'){
      await page.$eval('input[value="로그인"]', el => el.click());
    }else{
      await page.click(clickSelector);

    }
    await page.waitForNavigation(); // <------------------------- Wait for Navigation
    console.log('New Page URL:', page.url());
    await page.screenshot({ path: target+'.png' });
    await browser.close();
  }

  // login('StyleShare','input[name="main_id"]','input[name="main_pwd"]','.submit_btn','comz','https://shop.styleshare.kr/selleradmin/order/catalog?keyword=&date_field=regist_date&regist_date[]=2022-01-05&regist_date[]=2022-02-05&chk_step[25]=1&chk_step[35]=1')
  // login('서울스토어','input[name="supplier_login_id"]','input[name="supplier_user_password"]','input[name="Submit"]','okidoki','https://partner.seoulstore.com/shop_admin/supplier/order/manage/order')
  // login('naver', '#loginId', '#loginPassword', '#loginButton', 'comzcomz', 'https://sell.smartstore.naver.com/#/login')
  // await login('coupang', '#userID','#userPWD','#btnLogin','okidoki', 'https://wing.coupang.com/tenants/sfl-portal/delivery/management' );
  await login('musinsa', '#ID','#PASSWD','.box_btn_login','comz', 'https://bizest.musinsa.com/po/order/ord35' )

})();

