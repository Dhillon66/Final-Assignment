first.addEventListener('click', function (){
  document.getElementById("image").src="images/basement.jpg";
  document.getElementById("first").className='buttonclick';
   document.getElementById("second").className='buttonprevious';
    document.getElementById("third").className='buttonprevious';
     document.getElementById("fourth").className='buttonprevious';
     document.getElementById("product_description").innerHTML="<h2>"+"Pomeranian"+"</h2>"+"The Pomeranian (also known as a Pom, Pommy or Pome) is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz.The breed has been made popular by a number of royal owners since the 18th century. Queen Victoria owned a particularly small Pomeranian, and consequently, the smaller variety became universally popular. During Queen Victoria's lifetime alone, the size of the breed decreased by half. As of 2017, in terms of registration figures, since at least 1998, the breed has ranked among the top fifty most popular breeds in the United States, and the current fashion for small dogs has increased their popularity worldwide.";
}) 
second.addEventListener('click', function (){
  document.getElementById("image").src="images/electrical.jpg";
  document.getElementById("second").className='buttonclick';
  document.getElementById("first").className='buttonprevious';
  document.getElementById("third").className='buttonprevious';
  document.getElementById("fourth").className='buttonprevious';
  document.getElementById("product_description").innerHTML="<h2>"+"Golden Retriever"+"</h2>"+"The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name.";
  
})
third.addEventListener('click', function (){
  document.getElementById("image").src="images/plumbing.jpg";
  document.getElementById("third").className='buttonclick';
   document.getElementById("first").className='buttonprevious';
    document.getElementById("second").className='buttonprevious';
     document.getElementById("fourth").className='buttonprevious';
     document.getElementById("product_description").innerHTML="<h2>"+"Husky"+"</h2>"+"A graceful dog with erect ears and a dense soft coat, the Siberian Husky stands 20 to 24 inches (51 to 61 cm) tall at the withers and weighs 35 to 60 pounds (16 to 27 kg). It is usually gray, tan, or black and white, and it may have head markings resembling a cap, a mask, or spectacles. The breed, kept pure for hundreds of years in Siberia, is noted for its intelligence and a gentle temperament. It was recognized by the Fédération Cynologique Internationale (International Canine Federation) in 1966 as a member of the spitz and primitive types group (subgroup Nordic sledge dogs) and by the American Kennel Club in 1930 as a member of the working group.";
})
fourth.addEventListener('click', function (){
  document.getElementById("image").src="images/flooring.jpg";
  document.getElementById("fourth").className='buttonclick';
   document.getElementById("first").className='buttonprevious';
    document.getElementById("second").className='buttonprevious';
     document.getElementById("third").className='buttonprevious';
     document.getElementById("product_description").innerHTML="<h2>"+"Shitzu"+"</h2>"+"The Shih Tzu is a sturdy little dog with a small snout and normally has large dark brown eyes. The Chinese have described their head shapes as owl head and lion head, and their mouth as frog mouths and their lips as earthworm lips .They have a soft and long double coat that will tangle and mat easily if not brushed at least every 2 or 3 days. A Shih Tzu should stand no more than 26.7 cm at the withers and with an ideal weight of 4.0 to 7.5kg (9 to 17 lbs). Their floppy ears are covered with long hair, and their heavily hair-covered tail is carried curled over the back. The coat may be of any color, though white and with blazes of grey are frequently seen. A very noticeable feature is the underbite, which is required in the breed standard.";
})




  function autoClick() {
      first.click();
    }

    first.addEventListener('click', function() {
      console.log('Button was clicked automatically!');
    });

    setTimeout(autoClick, 10);