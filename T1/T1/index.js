
              const aboutEl=document.querySelector('.about')
              const svg=document.querySelector('.contact_icon')
              const productEl=document.querySelector('.product')
              const titleEl=document.querySelector('.title')
              const textEl=document.querySelector('.text')
              const armeniaEl=document.querySelector('.armenia')
              const linktrainingEl=document.querySelector('.linkTraining')
              const linkinvestmentEl=document.querySelector('.linkInvestment')
              const linkSupportEl=document.querySelector('.linkSupport')
              const activeEl=document.querySelector('.active')
              const nonActiveEl=document.querySelector('.langContent>a')

              window.addEventListener("scroll", handleScroll);

             
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

                 let data={
                   english: {
                     about:'About us',
                     product:'Products',
                     title: 'Training',
                     text:'Course duration - x class / daily - x-y hours / Course type - online / As a result of the course, you will know what the market is, how it works, how to make money on this movement. You will be able to independently manage your account and From time to time you will have the opportunity to receive an online consultation',
                     armenia:'Armenia, Yerevan, Simon Vratsyan str,73/1',
                     linktraining:'Training',
                     linkinvestment:'Investments',
                     linkSupport:'Online Support',

                   },
                   armenian :{
                     about:'?????? ??????????',
                     product:'??????????????????????????????',
                     title:'????????????????',
                     text:"?????????????????? ???????????????????????? - x ??????/????????????-x-y ??????/?????????????????? ??????????-????????????/?????????????????? ?????????????????????? ???????? ?????????????? , ???? ?????? ?? ????????????, ???????????? ?? ?????? ???????????????? ?? ???????????? ?????? ???????????? ???????????? ???????????????? ???????????????????? ?????????????????????? ?????? ???????????? ?? ???????????????????? ?????????????????????????????? ???????????????? ???????????? ???????????? ??????????????????????????????????",
                     armenia:'????????????????, ??????????, ?????????? ?????????????? ?????????,73/1',
                     linktraining:'????????????????',
                     linkinvestment:'??????????????????????',
                     linkSupport:'???????????? ????????????????????????',

                   }
                 }
           
             let attr=localStorage.getItem("lang");
             attr=='english'?activeEl.textContent='EN':activeEl.textContent='??????'
             attr=='english'?nonActiveEl.textContent='??????':nonActiveEl.textContent='EN'
             attr=='armenian'?activeEl.textContent='??????':activeEl.textContent='EN'
             attr=='armenian'?nonActiveEl.textContent='EN':nonActiveEl.textContent='??????'
             attr=='english'?nonActiveEl.setAttribute('language','armenian'):nonActiveEl.setAttribute('language','english')
             aboutEl.textContent=data[attr].about
             productEl.textContent=data[attr].product
             titleEl.textContent=data[attr].title
             textEl.textContent=data[attr].text
             armeniaEl.textContent=data[attr].armenia
             linktrainingEl.textContent=data[attr].linktraining
             linkinvestmentEl.textContent=data[attr].linkinvestment
             linkSupportEl.textContent=data[attr].linkSupport
        
             nonActiveEl.addEventListener('click',()=>{
              let attr=nonActiveEl.getAttribute('language')
              activeEl.textContent=='EN'?activeEl.textContent='??????':activeEl.textContent='EN'
              nonActiveEl.textContent=='??????'?nonActiveEl.textContent='EN':nonActiveEl.textContent='??????'
              attr=='english'?nonActiveEl.setAttribute('language','armenian'):nonActiveEl.setAttribute('language','english')
              localStorage.setItem("lang", attr)
              aboutEl.textContent=data[attr].about
              productEl.textContent=data[attr].product
              titleEl.textContent=data[attr].title
              textEl.textContent=data[attr].text
              armeniaEl.textContent=data[attr].armenia
              linktrainingEl.textContent=data[attr].linktraining
              linkinvestmentEl.textContent=data[attr].linkinvestment
              linkSupportEl.textContent=data[attr].linkSupport
             })
           