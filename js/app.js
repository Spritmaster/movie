let kinoTab=document.querySelector(".kino__tablet")
let moviePic=document.querySelector(".img")
let form=document.querySelector(".form")
let info=document.querySelector(".loop")
let body=document.querySelector("body")
let container=document.querySelector(".container")

const API =`https://www.omdbapi.com/?apiKey=f88ba9a5&t=`

let inputValue
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    inputValue=info.value
    console.log(inputValue);
    getDate(API).then((data)=>{
        console.log(data);
        imag(data)
    })

    container.classList.remove("hiden")
    
})
async function getDate(api ) {
    const res =await fetch(api +inputValue)
    const data = await res.json()
    if(data){
        return data
    }
    
}


document.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        info.value=""
    }
    
})
function createEl(type,text,clas,title){
   let el =document.createElement(type)
    el.classList.add(clas)
    el.textContent=text
    return el

}
function apen(plus){
kinoTab.append(plus)
}






function imag(data){
   let moviePoster=createEl("img")
   let title=createEl("h1","","title")
   title.textContent=data.Title
   kinoTab.append(title)
   moviePoster.src=data.Poster
   moviePic.append(moviePoster)
   let year=""
   year=createEl("p","Year: "+data.Year)
   let actors=createEl("p","Actors: "+data.Actors)
   let country=createEl("p","Country:"+data.Country)
   let  money=createEl("p","Kino kelgan foyda: "+data.BoxOffice)
   let shortInfo=createEl("p","Qisqacha ma'lumot :"+data.Plot,"main-info")

   
   apen(year)
   apen(country)
   apen(actors)
   apen(money)
   apen(shortInfo)


   document.body.style.backgroundImage = `url(${data.Poster})`;
   body.style.backgroundRepeat ="no-repeat"
   body.style.backgroundSize="cover"
}
