/*--------------------------NAVIGATION--------------------------*/
const menu = document.getElementById('mobile-cta-menu')
      exit = document.getElementById('mobile-cta-exit')
      cover = document.getElementById('cover')
      body = document.querySelector('body')
      nav = document.querySelector('nav');
      let scWidth = screen.width;

      menu.addEventListener("click", function() {
        nav.classList.add('show');
        cover.style.display = "grid";
        if(scWidth < 768)
          body.style.overflowY = 'hidden';
      });
      
      exit.addEventListener("click", function() {
        nav.classList.remove('show');
        cover.style.display = "none";
        if(scWidth < 768)
          body.style.overflowY = 'scroll';
      });

      cover.addEventListener('click', function (event) {
        nav.classList.remove('show');
        cover.style.display = "none";
        if(scWidth < 768)
          body.style.overflowY = 'scroll';
      });
/*--------------------------------------------------------------*/

/*--------------------------BOOK NOW--------------------------*/
const book = document.getElementById('booknow');

      window.addEventListener("scroll", function() {
        if(this.pageYOffset > 40){
          book.classList.add('booknow-top');
        }
        else {
          book.classList.remove('booknow-top');
        }
      });

const btnBook = document.getElementById('book-btn')  
      btnBookExit = document.getElementById('mobile-book-exit')
      sectionBook = document.getElementById('book-section')
      formBook = document.getElementById('book-form');

      btnBook.addEventListener("click", () => {
        sectionBook.style.visibility = "visible";
      })

      btnBookExit.addEventListener("click", () => {
        sectionBook.style.visibility = "hidden";
      })

      document.addEventListener('mouseup', function(e) {
        if (!formBook.contains(e.target)) {
          sectionBook.style.visibility = "hidden";
        }
    });
/*--------------------------------------------------------------*/

/*--------------------------QUANTITY--------------------------*/
const dec = document.getElementsByClassName('input-number-decrement')
      numInput = document.getElementsByClassName('input-number')
      inc = document.getElementsByClassName('input-number-increment');

for(let i = 0; i<3; i++){
      numInput[i].value = 1;

      dec[i].addEventListener("click", () => {
        numInput[i].value -= 1;

        if(numInput[i].value < 1)
          numInput[i].value = 1;
          
        setNumValue();
      })

      inc[i].addEventListener("click", () => {
        numInput[i].value = parseInt(numInput[i].value) + 1;
          
        if(!numInput[i].value)
          numInput[i].value = 1;

        setNumValue();
      })

      function setNumValue (){
        numInput.setAttribute('value',numInput[i].value);
      };
}
/*--------------------------------------------------------------*/

/*---------------------------AMENITIES--------------------------*/
const amenities = document.getElementById("amenities-btn");

      amenities.addEventListener('click', () => {
          amenities.classList.toggle('btn-rotate');
      })

const btnHotel = document.getElementById("Hotel").querySelectorAll("button");

      btnHotel[4].classList.toggle('btn-rotate');
      for(let i=0; i < btnHotel.length; i++){
          btnHotel[i].addEventListener('click', () => {
              btnHotel[i].classList.toggle('btn-rotate');
          })
      }
/*--------------------------------------------------------------*/

/*--------------------------CALENDAR--------------------------*/
const checkIn = document.getElementById('check-in')
      checkOut = document.getElementById('check-out');
      
const d = new Date();
let currentYear = d.getFullYear()
    currentMonth = d.getMonth()+1
    currentDay = d.getDate();
  
      if(currentDay<10){
        currentDay = '0' + currentDay;
      } 
      if(currentMonth<10){
        currentMonth = '0' + currentMonth;
      } 

    today = currentYear + '-' + currentMonth + '-' + currentDay;
    checkIn.value = today;
    checkIn.setAttribute('min', today);

    checkOutMin()
function checkOutMin(){
  let checkinValue = new Date (checkIn.value);
      if(!checkIn.value)
        checkinValue = new Date (today);

  let checkinDay = new Date (checkinValue);
      checkinDay.setDate(checkinDay.getDate() + 1);
      plusDay = checkinDay.getDate();

  let checkinMonth = checkinValue.getMonth()+1;
      if(plusDay === 1 && currentDay !== 1){
        checkinMonth = checkinValue.getMonth();
        checkinMonth += 2;

        if(checkinMonth === 13)
          checkinMonth = 1;
      }

  let checkinYear = checkinValue.getFullYear();
      if(plusDay === 1 && checkinMonth === 1 && currentMonth !== 1){
        checkinYear = new Date (checkinValue);
        checkinYear.setYear(checkinYear.getFullYear() + 1);
        checkinYear = checkinYear.getFullYear();
      }

      if(plusDay<10){
        plusDay = '0' + plusDay;
      } 
      if(checkinMonth<10){
        checkinMonth = '0' + checkinMonth;
      } 

      checkinDate = checkinYear + '-' + checkinMonth + '-' + plusDay;
      checkOut.setAttribute('min', checkinDate);

      if(checkIn.value > checkOut.value || !checkOut.value)
        checkOut.value = checkinDate;
    }

checkOut.addEventListener("change", () => {
    if(!checkIn.value)
      checkIn.value = today;

    if(checkIn.value > checkOut.value || !checkOut.value)
      checkOutMin();
})

checkIn.addEventListener("change", () => {
    if(!checkIn.value)
      checkIn.value = today;

      checkOutMin();
})
/*--------------------------------------------------------------*/
    
    
