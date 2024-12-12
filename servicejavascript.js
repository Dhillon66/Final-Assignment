first.addEventListener('click', function (){
  document.getElementById("image").src="images/basement.jpg";
  document.getElementById("first").className='buttonclick';
   document.getElementById("second").className='buttonprevious';
    document.getElementById("third").className='buttonprevious';
     document.getElementById("fourth").className='buttonprevious';
     document.getElementById("product_description").innerHTML="<h2>"+"Basement Rennovation"+"</h2>"+"Basement rennovation is done here as the company has talented and experienced labour and the price range is also very less.";
}) 
second.addEventListener('click', function (){
  document.getElementById("image").src="images/electrical.jpg";
  document.getElementById("second").className='buttonclick';
  document.getElementById("first").className='buttonprevious';
  document.getElementById("third").className='buttonprevious';
  document.getElementById("fourth").className='buttonprevious';
  document.getElementById("product_description").innerHTML="<h2>"+"Electrical Services"+"</h2>"+"Electrical service is available, company do the electrical work in a legal way and with full safety and ensure quality work.";
  
})
third.addEventListener('click', function (){
  document.getElementById("image").src="images/plumbing.jpg";
  document.getElementById("third").className='buttonclick';
   document.getElementById("first").className='buttonprevious';
    document.getElementById("second").className='buttonprevious';
     document.getElementById("fourth").className='buttonprevious';
     document.getElementById("product_description").innerHTML="<h2>"+"Plumbing Services"+"</h2>"+"Plumbing service is available, company do the plumbing work in a legal way and with full safety and ensure quality work.";
})
fourth.addEventListener('click', function (){
  document.getElementById("image").src="images/flooring.jpg";
  document.getElementById("fourth").className='buttonclick';
   document.getElementById("first").className='buttonprevious';
    document.getElementById("second").className='buttonprevious';
     document.getElementById("third").className='buttonprevious';
     document.getElementById("product_description").innerHTML="<h2>"+"Flooring Services"+"</h2>"+"Flooring work is also done, with best quality floor and doing in the best way to ensure quality work.";
})




  function autoClick() {
      first.click();
    }

    first.addEventListener('click', function() {
      console.log('Button was clicked automatically!');
    });

    setTimeout(autoClick, 10);