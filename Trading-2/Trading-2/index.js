const aboutEl=document.querySelector('.about')
const openMenu=document.querySelector('.icon')
const mainMenu=document.querySelector('.menu')
const innerMenu=document.querySelector('.innerMenu')
const closeMenu=document.querySelector('.closeIcon')
const secMenu=document.querySelector('.secmenu')
const langWrap=document.querySelector('.langWrap')
const arrow=document.querySelector('.arrow')
const arrow1=document.querySelector('.arrow1')
const dropContent=document.querySelector('.dropdown-content')

openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)
window.addEventListener('resize',resizee)


function resizee ()  {
 
 if ( window.innerWidth>900) {
  openMenu.style.display='none'
  mainMenu.style.display='flex'
  innerMenu.style.display='flex'
  innerMenu.style.position=''
  innerMenu.style.marginLeft=''
  innerMenu.style.marginTop=''
  langWrap.style.display=''
  mainMenu.style.height=''
  arrow.style.display=''
  arrow1.style.display=''
  
 } else {
  openMenu.style.display='block'
  innerMenu.style.display='none'
  mainMenu.style.backgroundColor=''
  closeMenu.style.display='none'
  
 }
}

function show () {

 openMenu.style.display='none'
 closeMenu.style.display='block'
 closeMenu.style.marginRight='6vw';
 mainMenu.style.height='100vh'
 mainMenu.style.width='100%';
 innerMenu.style.display='block'
 mainMenu.style.alignItems='flex-start'
 mainMenu.style.backgroundColor='#2c3e50'
 innerMenu.style.position='absolute'
 innerMenu.style.marginLeft='-50vw'
 innerMenu.style.marginTop='30vw'
 mainMenu.style.transition='all 1s ease';
 aboutEl.style.paddingTop='100px'
 langWrap.style.display='none'
 arrow.style.display='none'
 arrow1.style.display='none'
 dropContent.style.marginLeft='50px'

 
 



}


function close () {
  openMenu.style.display='block'
  closeMenu.style.display='none'
  mainMenu.style.height='6rem'
  mainMenu.style.width='100%';
  mainMenu.style.alignItems='center'
  innerMenu.style.display='none'
  mainMenu.style.backgroundColor=''
  mainMenu.style.display='flex'

 
 
}










// function getCurrency () {
  
// fetch('https://api.exchangerate.host/latest').
// then(function(res){
//   return res.json()
// }).then(function(res) {
//  let eur=document.querySelector('.euroCurrency')
//  let usd=document.querySelector('.usdCurrency')
//  let ien=document.querySelector('.ienCurrency')
//  let AMD=res.rates.AMD
//  let USD=res.rates.USD
//  let JPY=res.rates.JPY

//  eur.textContent=`${'1EUR='+AMD.toFixed(2)+'AMD'}`
//  usd.textContent=`${'1USD='+(AMD/USD).toFixed(2)+'AMD'}`
//  ien.textContent=`${'1JPY='+(AMD/JPY).toFixed(2)+'AMD'}`
// })
// }
// getCurrency ()

// // get currency from api every 12 hours
// setInterval(()=>{
//   getCurrency ()
// },43200000)





window.addEventListener("scroll", handleScroll);


function handleScroll() {
  let elem=document.querySelector('.menu')
  // elem.style.backgroundColor='red'
  // elem.style.transition='all 0.6s ease'
  elem.classList.toggle('scrolling-active',scrollY>0)
  if(window.pageYOffset>0) {
  
   

  } else {
    // let elem=document.querySelector('.menu')
    // elem.style.backgroundColor='transparent'
   
  }
}

// setInterval(()=>{
//   handleScroll()
// },1000)
  
  
   const productEl=document.querySelector('.product')
   const timeEl=document.querySelector('.timeZone')
   const currencyEl=document.querySelector('.currency')
   const parisEl=document.querySelector('.Paris')
   const newyorkEl=document.querySelector('.NewYork')
   const tokyoEl=document.querySelector('.Tokyo')
   const usdEl=document.querySelector('.usd')
   const eurEl=document.querySelector('.eur')
   const ienEl=document.querySelector('.ien')
   const productsEl=document.querySelector('.products')
   const trainingEl=document.querySelector('.training')
   const investmentEl=document.querySelector('.investment')
   const onlineSupportEl=document.querySelector('.onlineSupport')
   const trainingTextEl=document.querySelector('.trainingText')
   const investmentTextEl=document.querySelector('.investmentText')
   const supportTextEl=document.querySelector('.supportText')
   const ourtrainersEl=document.querySelector('.ourtrainers')
   const VahagnEl=document.querySelector('.Vahagn')
   const KarenEl=document.querySelector('.Karen')
   const ZhanEl=document.querySelector('.Zhan')
   const armeniaEl=document.querySelector('.armenia')
   const linktrainingEl=document.querySelector('.linkTraining')
   const linkinvestmentEl=document.querySelector('.linkInvestment')
   const linkSupportEl=document.querySelector('.linkSupport')
   const activeEl=document.querySelector('.active')
   const nonActiveEl=document.querySelector('.langContent>a')
  
   const minparisEl=document.querySelector('.minparis')
   const secparisEl=document.querySelector('.secparis')
   const hourparisEl=document.querySelector('.hourparis')
   const minnewyorkEl=document.querySelector('.minnewyork')
   const secnewyorkEl=document.querySelector('.secnewyork')
   const hournewyorkEl=document.querySelector('.hournewyork')

   const mintokyoEl=document.querySelector('.mintokyo')
   const sectokyoEl=document.querySelector('.sectokyo')
   const hourtokyoEl=document.querySelector('.hourtokyo')
   
   
   
   setInterval(()=>{
       let date=new Date()
   
       const secDeg=date.getSeconds()/60*360-90;
       const minDeg=date.getMinutes()/60*360-90;
       const hourDeg=(date.getHours()-2)/12*360-90;

       hourparisEl.style.transform=`rotate(${hourDeg}deg)`
       minparisEl.style.transform=`rotate(${minDeg}deg)`
       secparisEl.style.transform=`rotate(${secDeg}deg)`
   },1000)


   setInterval(()=>{
    let date=new Date()

    const secDeg=date.getSeconds()/60*360-90;
    const minDeg=date.getMinutes()/60*360-90;
    const hourDeg=(date.getHours()-8)/12*360-90;
    hournewyorkEl.style.transform=`rotate(${hourDeg}deg)`
    minnewyorkEl.style.transform=`rotate(${minDeg}deg)`
    secnewyorkEl.style.transform=`rotate(${secDeg}deg)`
},1000)


setInterval(()=>{
  let date=new Date()

  const secDeg=date.getSeconds()/60*360-90;
  const minDeg=date.getMinutes()/60*360-90;
  const hourDeg=(date.getHours()-19)/12*360-90;
  hourtokyoEl.style.transform=`rotate(${hourDeg}deg)`
  mintokyoEl.style.transform=`rotate(${minDeg}deg)`
  sectokyoEl.style.transform=`rotate(${secDeg}deg)`
},1000)



localStorage.setItem("lang", "english")



      let data={
        english: {
          about:'About us',
          product:'Products',
          time:'Time Zone',
          currency:'Currency',
          paris:'Paris',
          newyork:'New York',
          tokyo:'Tokyo',
          usd:'USD',
          eur:'EUR',
          ien:'JPY',
          products:'Products',
          training:'Training',
          investment:'Investments',
          onlineSupport:'Online Support',
          linktraining:'Training',
          linkinvestment:'Investments',
          linkSupport:'Online Support',
          trainingText:"Scalp Trading Online Course: During the course you will learn what the market is, how it works and how to generate income.",
          investmentText:"Trust your savings to our experienced specialists and have a drastic increase in income in a short time.",
          supportText:"With our courses, you have the ability to receive online support anytime and from anywhere. Our professional team will help you solve the problem very quickly and as efficiently as possible.",
          ourtrainers:'Our Trainers',
          Vahagn:'Vahagn Karapetyan',
          Karen:"Karen Aghababyan",
          Zhan:'Zhan Mozone',
          armenia:'Armenia, Yeravan'

          

        },
        armenian :{
          about:'Մեր մասին',
          product:'Ծառայություններ',
           products:'Ծառայություններ',
          time:'Ժամային գոտի',
          currency:'Արժույթ',
          paris:'Փարիզ',
          newyork:'Նյու Յորք',
          tokyo:'Տոկիո',
          usd:'ԱՄՆ դոլար',
          eur:'Եվրո',
          ien:'Իեն',
          training:'Դասընթաց',
          investment:'Ներդրումներ',
          onlineSupport:'Օնլայն աջակցություն',
          linktraining:'Դասընթաց',
          linkinvestment:'Ներդրումներ',
          linkSupport:'Օնլայն աջակցություն',
          trainingText:"Սկալպինգի օնլայն դասընթաց։Արդյունքում կսովորեք, թե ինչ է շուկան, ինչպես է այն շարժվում և ինչպես այդ շարժից ստանալ եկամուտ։",
          investmentText:"Վստահեք Ձեր խնայողությունները մեր փորձված մասնագետներին և ունեցեք եկամտի կտրուկ աճ կարճ ժամկետում։",
          supportText:"Օգտվելով մեր դասընթացներից հնարավորություն ունեք ստանալու օնլայն աջակցություն՝ ցանկացած պահի և ցանկացած վայրից։ Մեր պրոֆեսիոնալ թիմը կօգնի Ձեզ շատ արագ լուծել առաջացած խնդիրը՝ արդյունավետ տարբերակով։",
          ourtrainers:'Մասնագետներ',
          Vahagn:'Վահագն Կարապետյան',
          Karen:"Կարեն Աղաբաբյան",
          Zhan:'Ժան Մոզոնե',
          armenia:"Հայաստան,Երևան"
        }
      }



  nonActiveEl.addEventListener('click',()=>{
    let attr=nonActiveEl.getAttribute('language')
    activeEl.textContent=='EN'?activeEl.textContent='Հայ':activeEl.textContent='EN'
    nonActiveEl.textContent=='Հայ'?nonActiveEl.textContent='EN':nonActiveEl.textContent='Հայ'
    attr=='english'?nonActiveEl.setAttribute('language','armenian'):nonActiveEl.setAttribute('language','english')
    localStorage.setItem("lang", attr)
    aboutEl.textContent=data[attr].about
    productEl.textContent=data[attr].product
    timeEl.textContent=data[attr].time
    parisEl.textContent=data[attr].paris
    newyorkEl.textContent=data[attr].newyork
    tokyoEl.textContent=data[attr].tokyo
    productsEl.textContent=data[attr].products
    trainingEl.textContent=data[attr].training
    investmentEl.textContent=data[attr].investment
    onlineSupportEl.textContent=data[attr].onlineSupport
    trainingTextEl.textContent=data[attr].trainingText
    investmentTextEl.textContent=data[attr].investmentText
    supportTextEl.textContent=data[attr].supportText
    ourtrainersEl.textContent=data[attr].ourtrainers
    VahagnEl.textContent=data[attr].Vahagn
    KarenEl.textContent=data[attr].Karen
    ZhanEl.textContent=data[attr].Zhan
    armeniaEl.textContent=data[attr].armenia
    linktrainingEl.textContent=data[attr].linktraining
    linkinvestmentEl.textContent=data[attr].linkinvestment
    linkSupportEl.textContent=data[attr].linkSupport
})

     

    
  
